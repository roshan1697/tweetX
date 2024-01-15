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
        }
        res.status(403).json({ message:'you are not login' })

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
    }
    res.status(403).json({message: ' Invalid username or password'})
})  

router.post('/post',authJwt,async(req,res)=>{
    const post = new Post(req.body)
    await post.save()
    res.json({ message: 'Post created successfully'})


})


export default router