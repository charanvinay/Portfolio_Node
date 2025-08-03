import Works from "../models/work.model.js";
import WorkTags from "../models/worktags.model.js";

export const getWorks = async (req, res) => {
  try {
    const { tag = "" } = req.query;
    const query = {};
    if (tag) {
      query.tags = { $in: [tag] };
    }
    const data = await Works.find(query).sort({ name: 1 });
    res.json({ status: true, data });
  } catch (error) {
    res.json({ status: false, data: [] });
  }
};
export const getWorkTags = async (req, res) => {
  try {
    const data = await WorkTags.find();
    res.json({ status: true, data });
  } catch (error) {
    res.json({ status: false, data: [] });
  }
};
