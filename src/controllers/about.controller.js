import About from "../models/about.model.js";

export const getAbout = async (req, res) => {
    try {
        const data = await About.find();
        res.json({ status: true, data })
    } catch (error) {
        res.json({ status: false, data: [] })
        
    }
}