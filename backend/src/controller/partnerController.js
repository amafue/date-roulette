import partner from "../models/partner.js";

export async function getPartner(req,res) {
    try {
        const partnerName = await partner.findById(req.params.id);
        if (!partnerName) return res.status(404).json({message:"User not found"});
        res.status(200).json(partnerName)
    } catch (error) {
        console.error("Error at getPartner")
        res.status(500).json({message: "Internal server error"})
    }
}

export async function createPartner(req,res) {
    try {
        const {name} = req.body;
        const newPartner = new partner({name})
        const savedPartner = await newPartner.save();
        res.status(201).json(savedPartner)
    } catch (error) {
        console.error("Error at creatPartner")
        res.status(500).json({message: "Internal server error"})
    }
}