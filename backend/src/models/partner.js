import { Schema, model } from "mongoose";

const partnerSchema = new Schema({
    name: {type: String, required: true}
});

export default model('Partner', partnerSchema)