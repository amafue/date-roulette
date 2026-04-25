import { Schema, model } from "mongoose";

const challengeSchema = new Schema({
    title: String,
    description: String,
    category: String,
    budget: String  //low medium high
});

export default model('Challenge', challengeSchema)