import express from 'express'
import authJwt from '../middleware/auth.js'
import { SECRET } from '../../config.js'
import  jwt  from "jsonwebtoken"
import User from '../modal/user.js'
import Post from '../modal/post.js'


const router = express.Router()

const sort = (array) =>{
    const sortedData= array.sort(( (a, b)=> { return new Date(b.createdAt) - new Date(a.createdAt) }))
    return sortedData
}
const userFollowing = (array1,array2) => {
    
    const user = array1.map((a)=>{
        const found = array2.find((index)=> index.toString() === a._id.toString())
        
        if(found){

            return {...a.toObject(), userfollow:true}
        }
        return {...a.toObject(), userfollow:false}
    })
    return user
}


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
    const userFollow = (array1,array2) => {
    
        const user = array1.map((a)=>{
            const found = array2.find((index)=> index._id.toString() === a._id.toString())
            
            if(found){
    
                return {...a.toObject(), userfollow:true}
            }
            return {...a.toObject(), userfollow:false}
        })
        return user
    }
    const user = await User.findById(req.user.id).populate('followers','name email followers following').populate('following','name email followers following').populate('userpost')
    const post = user.userpost.map((post) => {
        return { ...post.toObject(), name: user.name }
    })
    const followers = userFollow(user.followers,user.following)
    const following = userFollow(user.following,user.following)
    if(user){
        return    res.json({
                user,
                post,
                followers,
                following
            })
        }

            res.status(403).json({ message:'you are not login' })
})

router.get('/users',authJwt,async(req,res)=>{
    const currentuser = await User.findById(req.user.id)
    const users = await User.find({}).select("-email -password -followers -userpost")   
    if(users){
        users.splice(users.findIndex(a => a._id.toString() === req.user.id) , 1)
        return  res.json({users: userFollowing(users,currentuser.following)} )
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
    const token = jwt.sign({id, role: 'user'}, SECRET, {expiresIn: '24h'})
    res.json({message: 'user created successfully', token})
})


router.post('/login',async(req,res)=>{
    const {email, password}= req.body
    const user = await User.findOne({email, password})
    if (user) {
        const id =user._id
        const token = jwt.sign({id, role: 'user'},SECRET,{expiresIn: '24h'})
        res.json({message:'logged in successfully', token})
    }else{

        res.status(403).json({message: ' Invalid username or password'})
    }
})  

router.post('/post',authJwt,async(req,res)=>{
    const post = new Post(req.body)
    await post.save()
    const user = await User.findById(req.user.id)
    user.userpost.push(post._id)
    await user.save()
    res.json({ message: 'Post created successfully'})


})

router.get('/posts', authJwt,async(req,res)=>{
    const user = await User.findById(req.user.id).populate('userpost')
    const followingpost = async(id)=>{
        const user = await User.findById(id).populate('userpost')
        if(user) {
            const post = user.userpost.map((post)=>{
                return { ...post.toObject(), name:user.name}
            })
            return post
        }
        return {}
    }
    const getAllFollowingPosts = async () => {
        const allfollowingpost = await Promise.all(
            user.following.map(async (id) => await followingpost(id))
        )
        return allfollowingpost
    }
    
    if(user){
        const feed =  await   getAllFollowingPosts()
        const allpost = user.userpost.map((post) => {
            return { ...post.toObject(), name: user.name }
        })
    
        return res.json({post:sort([...allpost, ...feed.flat()])})
    }
    res.status(404).json({ message: 'User not found' })
    
})
router.get('/follow/:userId',authJwt, async (req, res) => {
    const { userId } = req.params
    const followuserId = req.user.id
    
    const user = await User.findById(userId)
    const user2 = await User.findById(followuserId)
    if (!user || !user2) {
        return res.status(404).json({ message: 'User not found' })
    }
    user.followers.push(followuserId)
    await user.save()
    user2.following.push(userId)
    await user2.save()
    res.json({ message:'followed user' })

    })

router.get('/unfollow/:userId',authJwt, async (req, res) => {
    const  currentuserId  = req.user.id
    const { userId } = req.params
    
        const currentUser = await User.findById(currentuserId)
        const userToUnfollow = await User.findById(userId)
    
        if (!currentUser || !userToUnfollow) {
            return res.status(404).json({ message: 'User not found' })
        }
    
        currentUser.following.pull(userId)
        await currentUser.save()
    
        userToUnfollow.followers.pull(currentuserId)
        await userToUnfollow.save()
    
        res.json({ message: 'Unfollow successful' })
    
    })

export default router