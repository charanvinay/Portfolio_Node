import { model, Schema } from "mongoose";

const schema = new Schema({
    name: {
        type: String
    },
    company: {
        type: String
    },
    type: {
        type: String
    },
    from: {
        type: String
    },
    to: {
        type: String
    }
}, { strict: true });

const Experiences = model('experience', schema);

export default Experiences;