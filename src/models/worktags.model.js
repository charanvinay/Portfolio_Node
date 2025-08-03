import { model, Schema } from "mongoose";

const schema = new Schema({
    label: {
        type: String
    },
    value: {
        type: String
    }
}, { strict: true });

const WorkTags = model('worktag', schema);

export default WorkTags;