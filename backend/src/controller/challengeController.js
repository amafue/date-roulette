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
        const challenges = await challenge.find();
        if (challenges.length === 0) return res.status(404).json({message:"Challenges not found"});

        const randomIndex = Math.floor(Math.random()*challenges.length);
        const randomChallenge = challenges[randomIndex];

        res.status(200).json(randomChallenge)

    } catch (error) {
        console.error("Error at getRandomChallenge")
        res.status(500).json({message: "Internal server error"})
    }
    
}