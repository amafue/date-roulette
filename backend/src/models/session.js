import { Schema, model, Types } from "mongoose";

const sessionSchema = new Schema({
    challengeId: {type: Types.ObjectId, ref: "Challenge", required: true},
    partnerId: {type: Types.ObjectId, ref: "Partner"},
    date: {type: Date, required: true},
    rating: Number,
    notes: String,
});

export default model('Session', sessionSchema)