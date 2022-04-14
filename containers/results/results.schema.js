import mongoose from "mongoose";


const resultsSchema =new  mongoose.Schema({
  'year':Number,
  sessions:{
    type: mongoose.Types.ObjectId,
    ref: 'sessions'
  } 
})

export default mongoose.model('results', resultsSchema)