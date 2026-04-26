import challenge from "../models/challenge.js";

export async function getChallenges(req,res) {
    try {
        const challenges = await challenge.find();
        res.status(200).json(challenges)
    } catch (error) {
        console.error("Error at getChallenges")
        res.status(500).json({message: "Internal server error"})
    }
    
}

export async function createChallenge(req,res) {
    try {
        const{title,description, category, budget} = req.body
        const newChallenge = new challenge({title, category, budget, description})
        const savedChallenge = await newChallenge.save()
        res.status(201).json(savedChallenge)
    } catch (error) {
        console.error("Error at createChallenge")
        res.status(500).json({message: "Internal server error"})
    }
    
}

export async function updateChallenge(req,res) {
    try {
        const {title, description, category, budget} = req.body
        const updatedChallenge = await challenge.findByIdAndUpdate(
            req.params.id, 
            {title,description, category, budget}, 
            {new: true}
        );

        if (!updatedChallenge) return res.status(404).json({message:"Challenge not found"});
        res.status(200).json(updatedChallenge);

    } catch (error) {
        console.error("Error at updateChallenge")
        res.status(500).json({message: "Internal server error"})
    }
    
}

export async function deleteChallenge(req,res) {
    try {
        const deletedChallenge = await challenge.findByIdAndDelete(req.params.id);
        if (!deletedChallenge) return res.status(404).json({message:"Challenge not found"});
        res.status(200).json({message:"Challenge deleted succesfully"});
    } catch (error) {
        console.error("Error at deleteChallenge")
        res.status(500).json({message: "Internal server error"})
    }
    
}

export async function getRandomChallenge(req,res) {
    try {
        const{category, budget} = req.query;
        const match = {};

        if (category) match.category = category;
        if (budget) match.budget = budget;
        
        const randomChallenge = await challenge.aggregate([
            {$match: match},
            {$sample: { size: 1 }}
        ]);

        if (!randomChallenge.length) {
            return res.status(404).json({message: "No challenge was found"})
        }

        res.status(200).json(randomChallenge[0])

    } catch (error) {
        console.error("Error at getRandomChallenge")
        res.status(500).json({message: "Internal server error"})
    }
    
}