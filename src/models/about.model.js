import { model, Schema } from "mongoose";

const schema = new Schema({
    role: {
        type: String
    },
    description: {
        type: String
    }
}, { strict: true });

const About = model('about', schema);

export default About;