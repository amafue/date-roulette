import user from "../models/user.js"

export async function getUser(req,res) {
    try {
        const aUser = await user.find();
        res.status(200).json(aUser)
    } catch (error) {
        console.error("Error at getUser")
        res.status(500).json({message: "Internal server error"})
    }
}

export async function createUser(req,res) {
    try {
        const {name} = req.body;
        const newUser = new user({name: name})
        const savedUser = await newUser.save();
        res.status(200).json(savedUser)
    } catch (error) {
        console.error("Error at getUser")
        res.status(500).json({message: "Internal server error"})
    }
}