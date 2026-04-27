import session from "../models/session.js"

export async function getAllSessions(req,res) {
    try {
        const sessions = await session.find()
            .populate("challengeId")
            .populate("userId");
            
        res.status(200).json(sessions)
    } catch (error) {
        console.error("Error at getAllSessions")
        res.status(500).json({message: "Internal server error"})
    }
}

export async function getSession(req,res) {
    try {
        const aSession = await session.findById(req.params.id)
            .populate("challengeId")
            .populate("userId");

        if (!aSession) return res.status(404).json({message:"Session not found"});
        res.status(200).json(aSession)
    } catch (error) {
        console.error("Error at getSession")
        res.status(500).json({message: "Internal server error"})
    }
}

export async function createSession(req,res) {
    try {
        const {challengeId, userId, date, rating, notes} = req.body
        const newSession = new session({challengeId, userId, date, rating, notes})

        const savedSession = await newSession.save()
        res.status(201).json(savedSession)
    } catch (error) {
        console.error("Error at createSession")
        res.status(500).json({message: "Internal server error"})
    }
}

export async function updateSession(req,res) {
    try {
        const {challengeId, userId, date, rating, notes} = req.body
        const updatedSession = await session.findByIdAndUpdate(
            req.params.id, 
            {challengeId, userId, date, rating, notes},
            {new: true}
        );

        if (!updatedSession) return res.status(404).json({message:"Session not found"});
        res.status(200).json(updatedSession)
        
    } catch (error) {
        console.error("Error at updateSession")
        res.status(500).json({message: "Internal server error"})
    }
}
