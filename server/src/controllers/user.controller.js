import { User } from "../models/user.models.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";





export const profile = async (req, res) => {
    const token = req.cookies?.token;
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, {}, async (err, UserdecodedData) => {
            if (err) throw err;
            res.status(200).json({ message: "User Profile", UserdecodedData });
        });

    } else {
        res.status(401).json({ message: "Unauthorized" });
    }
}



export const register = async (req, res) => {
    const { username, password } = req.body;
    console.log(username, password);
    try {

        let user = await User.findOne({ username });

        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        user = await User.create({ username, password: hashedPassword });

        jwt.sign({ userId: user._id , username }, process.env.JWT_SECRET, {}, (err, token) => {
            if (err) throw err;
            res.cookie('token', token , {sameSite:'none', secure:true}).status(201).json({
                message: "User created successfully",
                id: user._id,
                // username: username,
            });
        });

    } catch (error) {
        if (error) throw error;
        console.error('Error during signup:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}