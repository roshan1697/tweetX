import express from 'express'
import authJwt from '../middleware/auth.js'
import { SECRET } from '../config.js'
import  jwt  from "jsonwebtoken"
import User from '../modal/user.js'
import Post from '../modal/post.js'


const router = express.Router()
router.get('/me',authJwt ,async(req,res)=>{
    const user = await User.findOne({email:req.user.email})
        if(user){
            res.json({
                user:user.email
            })
        }else{

            res.status(403).json({ message:'you are not login' })
        }

})



router.post('/signup',async(req,res)=>{
    const {name,email, password}= req.body
    const user = await User.findOne({email})
    if (user) {
        res.status(403).json({message: 'user already exists'})
    }
    const newUser = new User({name,email, password})
    await newUser.save()
    const token = jwt.sign({email, role: 'user'}, SECRET, {expiresIn: '1h'})
    res.json({message: 'user created successfully', token})
})


router.post('/login',async(req,res)=>{
    const {email, password}= req.body
    const user = await User.findOne({email, password})
    if (user) {
        const token = jwt.sign({user, role: 'user'},SECRET,{expiresIn: '1h'})
        res.json({message:'logged in successfully', token})
    }else{

        res.status(403).json({message: ' Invalid username or password'})
    }
})  

router.post('/post',authJwt,async(req,res)=>{
    const post = new Post(req.body)
    await post.save()
    res.json({ message: 'Post created successfully'})


})
router.get('/follow/:userId',authJwt, async (req, res) => {
    const { followinguserId } = req.params
    const followuserId = req.user._id

    const user = await User.findById(followinguserId).populate('following', followuserId)
    const user2 = await User.findById(followuserId).populate('followers',followinguserId)
    if (!user || user2) {
        return res.status(404).json({ message: 'User not found' })
    }

    res.json({ followers: user.followers })

    })

router.post('/unfollow/:userId',authJwt, async (req, res) => {
    const  userId  = req.user._id
    const { unfollowUserId } = req.params
    
        const currentUser = await User.findById(userId)
        const userToUnfollow = await User.findById(unfollowUserId)
    
        if (!currentUser || !userToUnfollow) {
            return res.status(404).json({ message: 'User not found' })
        }
    
        currentUser.followers.pull(unfollowUserId)
        await currentUser.save()
    
        userToUnfollow.following.pull(userId)
        await userToUnfollow.save()
    
        res.json({ message: 'Unfollow successful' })
    
    })

export default router