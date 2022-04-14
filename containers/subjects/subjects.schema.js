import mongoose from "mongoose";


const subjectsSchema =new  mongoose.Schema({
  name: String
})

export default mongoose.model('subjects', subjectsSchema)