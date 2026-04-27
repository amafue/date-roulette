import user from "../models/user.js"

export async function getUser(req,res) {
    try {
        const aUser = await user.findById(req.params.id);
        if (!aUser) return res.status(404).json({message:"User not found"});
        res.status(200).json(aUser)
    } catch (error) {
        console.error("Error at getUser")
        res.status(500).json({message: "Internal server error"})
    }
}

export async function createUser(req,res) {
    try {
        const {name} = req.body;
        const newUser = new user({name})
        const savedUser = await newUser.save();
        res.status(201).json(savedUser)
    } catch (error) {
        console.error("Error at createUser")
        res.status(500).json({message: "Internal server error"})
    }
}