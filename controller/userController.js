import User from "../models/userModel.js"

export const create=async(req,res)=>{
    try{
        const userData =new User(req.body)
        const {email}=userData

        const userExists=await User.findOne({email})

        if(userExists){
            res.status(400).json({message:"Mail Exists"})
        }
        const savedUser=userData.save()
        res.status(200).json({message:"Successfully saved"})
    }catch(err){
        res.status(500).json({error:"Internal server error"})
    }
}


export const fetch=async(req,res)=>{
    try{
        return res.json("Hello")
    }catch(err){
        console.log(err)
    }
}