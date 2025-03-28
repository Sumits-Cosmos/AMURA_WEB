import bycrpt from "bcryptjs"
import jwt from "jsonwebtoken"
import { User } from "../models/userModel"

export const signup = async (req, res) => {
    try{
        const {username, email, password, fullname} = req.body;
        const existingUser = await User.findOne({email});

        if(existingUser) return res.status(400).json({message: "Email already exists"});

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, email, password: hashedPassword, fullname });
        await newUser.save();

        res.status(201).json({msg: "User created successfully"});
    } catch(error){
        res.status(500).json({msg: "Error creating user", error});
    }
}

export const signin = async (req, res) => {
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if(!user) return res.status(400).json({message: "Invalid email or password"})
        
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(400).json({message: "Invalid email or password"})

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
        res.json({ token, user });
    } catch(error) {
     res.status(500).json({msg: "Error signing in", error});
    }
}