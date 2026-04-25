import session from "../models/session.js"

export async function getAllSessions(req,res) {
    try {
        const sessions = await session.find();
        res.status(200).json(sessions)
    } catch (error) {
        console.error("Error at getAllSessions")
        res.status(500).json({message: "Internal server error"})
    }
}

export async function getSession(req,res) {
    try {
        const aSession = await session.findById(req.params.id);
        if (!aSession) return res.status(404).json({message:"Session not found"});
        res.status(200).json(aSession)
    } catch (error) {
        console.error("Error at getSession")
        res.status(500).json({message: "Internal server error"})
    }
}

export async function createSession(req,res) {
    try {
        const {challengeName, date, rating, notes} = req.body
        const newSession = new session({challengeName, date, rating, notes})
        const savedSession = await newSession.save()
        res.status(200).json(savedSession)
    } catch (error) {
        console.error("Error at createSession")
        res.status(500).json({message: "Internal server error"})
    }
}

export async function updateSession(req,res) {
    try {
        const {challengeName, date, rating, notes} = req.body
        const updatedSession = session.findByIdAndUpdate(
            req.params.id, 
            {challengeName, date, rating, notes},
            {new: true}
        );
        if (!updatedSession) return res.status(404).json({message:"Session not found"});
        res.status(200).json(updatedSession)
    } catch (error) {
        console.error("Error at updateSession")
        res.status(500).json({message: "Internal server error"})
    }
}
