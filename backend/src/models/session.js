import { Schema, model } from "mongoose";

const sessionSchema = new Schema({
    challengeName: {type: String, required: true},
    date: {type: Date, required: true},
    rating: Number,
    notes: String,
});

export default model('Session', sessionSchema)