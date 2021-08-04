const User = require("../Scema/UsersScema");
const jwt=require("jsonwebtoken"); 
const SECRET_KEY=process.env.SECRET_KEY;

module.exports.signin = async (req,res) => {
    const {email,password} = req.body;
        const user=await User.find({email: email,})
        if(user.length>0 && password===user[0].password){
            const token=jwt.sign(email,SECRET_KEY)
            res.status(201).json({token:token})
        }
        else{
            res.status(400).json({"error": "Invalid credentials"})
        }
        res.json(user)
        console.log(user)
        
}
module.exports.signup = async (req,res) => {
    const {firstname,lastname,email,password,repassword,birthday} = req.body;
    try{
        const user=await new User({
            firstname,
            lastname,
            email,
            password,
            birthday
        })
        await user.save();
        res.status(200).json({message:"Sucessfully Registered"})
    }
    catch{
        res.status(404).json({error:"Internal Error"})
    }  
}