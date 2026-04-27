import { Schema, model, Types } from "mongoose";

const sessionSchema = new Schema({
    challengeId: {type: Types.ObjectId, ref: "Challene", required: true},
    userId: {type: Types.ObjectId, ref: "User", required: true},
    date: {type: Date, required: true},
    rating: Number,
    notes: String,
});

export default model('Session', sessionSchema)