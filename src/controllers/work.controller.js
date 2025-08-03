import Works from "../models/work.model.js";
import WorkTags from "../models/worktags.model.js";

export const getWorks = async (req, res) => {
    try {
        const data = await Works.find();
        res.json({ status: true, data })
    } catch (error) {
        res.json({ status: false, data: [] })
        
    }
}
export const getWorkTags = async (req, res) => {
    try {
        const data = await WorkTags.find();
        res.json({ status: true, data })
    } catch (error) {
        res.json({ status: false, data: [] })
        
    }
}