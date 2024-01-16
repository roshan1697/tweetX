import express from 'express'
import authJwt from '../middleware/auth.js'
import { SECRET } from '../config.js'
import  jwt  from "jsonwebtoken"
import User from '../modal/user.js'
import Post from '../modal/post.js'


const router = express.Router()
router.get('/me',authJwt ,async(req,res)=>{
    
    const user = await User.findById(req.user.id)
        if(user){
        return    res.json({
                user:user.id
            })
        }

            res.status(403).json({ message:'you are not login' })
        

})
router.get('/profile',authJwt,async(req,res)=>{
    const user = await User.findById(req.user.id).populate('followers','name email followers following')
    if(user){
        return    res.json({
                user
            })
        }

            res.status(403).json({ message:'you are not login' })
})

router.get('/users',authJwt,async(req,res)=>{
    const users = await User.find({})
    if(users){
        
        return  res.json({ users })
    }
    res.status(403).json({ message:'no users' })

})

router.post('/signup',async(req,res)=>{
    const {name,email, password}= req.body
    const user = await User.findOne({email})
    if (user) {
        return  res.status(403).json({message: 'user already exists'})
    }
    const newUser = new User({name,email, password})
    await newUser.save()
    const id = newUser._id
    const token = jwt.sign({id, role: 'user'}, SECRET, {expiresIn: '1h'})
    res.json({message: 'user created successfully', token})
})


router.post('/login',async(req,res)=>{
    const {email, password}= req.body
    const user = await User.findOne({email, password})
    if (user) {
        const id =user._id
        const token = jwt.sign({id, role: 'user'},SECRET,{expiresIn: '1h'})
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
    const { userId } = req.params
    const followuserId = req.user.id
    
    const user = await User.findById(userId)
    const user2 = await User.findById(followuserId)
    if (!user || !user2) {
        return res.status(404).json({ message: 'User not found' })
    }
    user.following.push(followuserId)
    await user.save()
    user2.followers.push(userId)
    await user2.save()
    res.json({ message:'followed user' })

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