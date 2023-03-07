import mongoose from "mongoose";

/* JobSchema will correspond to a collection in your MongoDB database. */
const JobSchema = new mongoose.Schema(
  {
    designation: String,
    industry: String,
    location: {
      city: String,
      country: String,
    },
    company: String,
    salary: {
      min: Number,
      max: Number,
    },
    shift: String,
    jobDescription: String,
    qualifications: [String],
    usersApplied: [String],
  },
  { timestamps: true }
);
export default mongoose.models.Job || mongoose.model( "Job", JobSchema );
