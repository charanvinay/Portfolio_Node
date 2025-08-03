import { model, Schema } from "mongoose";

const schema = new Schema({
    imgUrl: {
        type: String
    },
    projectLink: {
        type: String
    },
    codeLink: {
        type: String
    },
    tags: {
        type: [String]
    }
}, { strict: true });

const Works = model('work', schema);

export default Works;