import mongoose from "mongoose";
import sessionsSchema from "../sessions/sessions.schema.js";
import resultsSchema from "../results/results.schema.js";
import subjectsSchema from "../subjects/subjects.schema.js";

const studentSchema =new  mongoose.Schema({
  name: String,
  results: [{
    type: mongoose.Types.ObjectId,
    ref:'results'
  }]
})

export default mongoose.model('students', studentSchema)