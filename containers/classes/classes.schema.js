import mongoose from "mongoose";


const classesSchema =new  mongoose.Schema({
  name: String
})

export default mongoose.model('classes', classesSchema)