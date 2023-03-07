/** @format */

import dbConnect from "../../../lib/mongooseDb";
import Job from "../../../models/Job";

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case "GET" /* Get a model by its ID */:
      try {
        const job = await Job.findById(id);
        if (!job) {
          return res.status(400).json({ success: false });
        }
        return res.status(200).json({ success: true, data: job });
      } catch (error) {
        return res.status(400).json({ success: false });
      }
      break;

    case "DELETE" /* Delete a model by its ID */:
      try {
        const deletedJob = await Job.deleteOne({ _id: id });
        if (!deletedJob) {
          return res.status(400).json({ success: false });
        }
        return res.status(200).json({ success: true, data: {} });
      } catch (error) {
        return res.status(400).json({ success: false });
      }
      break;

    default:
      return res.status(400).json({ success: false });
      break;
  }
}
