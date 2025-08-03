import Experiences from "../models/experience.model.js";

export const getExperiences = async (req, res) => {
  try {
    const data = await Experiences.aggregate([
      {
        $group: {
          _id: "$from",
          isCurrent: { $first: "$current" },
          works: {
            $push: {
              name: "$name",
              type: "$type",
              to: "$to",
              company: "$company",
              desc: {
                $concat: [
                  "I worked as a ",
                  { $toLower: "$type" },
                  " developer at ",
                  "$company",
                ],
              },
              current: "$current",
            },
          },
        },
      },
      {
        $project: {
          _id: 0,
          year: "$_id",
          works: 1,
          desc: 1,
          isCurrent: 1,
        },
      },
      {
        $sort: {
          isCurrent: -1, // Put current experience first
          year: -1, // Then sort remaining by year descending
        },
      },
    ]);

    res.json({ status: true, data });
  } catch (error) {
    res.json({ status: false, data: [] });
  }
};
