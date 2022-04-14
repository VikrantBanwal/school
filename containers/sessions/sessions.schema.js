import mongoose from "mongoose";


const sessionsSchema =new  mongoose.Schema({
  subjects: [
    {
      subject:{
        type: mongoose.Types.ObjectId,
        ref: 'subjects'
      },
      marks: Number,
    }
  ],
  name: String
})

export default mongoose.model('sessions', sessionsSchema)