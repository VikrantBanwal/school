import { Router } from "express";
import studentsSchema from "./students.schema.js";

const studentsRouter = Router();

studentsRouter.get('/',async (req,res)=>{
  try{

    const result = await studentsSchema.aggregate([
      {
        '$lookup': {
          'from': 'results', 
          'localField': 'results', 
          'foreignField': '_id', 
          'as': 'results'
        }
      }, {
        '$lookup': {
          'from': 'sessions', 
          'localField': 'results.sessions', 
          'foreignField': '_id', 
          'as': 'sessions'
        }
      }, {
        '$project': {
          'subjects': '$sessions.subjects', 
          'name': '$name'
        }
      }, {
        '$unwind': {
          'path': '$subjects'
        }
      }, {
        '$unwind': {
          'path': '$subjects'
        }
      }, {
        '$match': {
          'subjects.marks': {
            '$gt': 50
          }
        }
      }, {
        '$lookup': {
          'from': 'subjects', 
          'localField': 'subjects.subject', 
          'foreignField': '_id', 
          'as': 'subjects.subject'
        }
      }
    ]);

  
    // const result = await studentsSchema.find({}).populate({
    //   path:'results',
    //   select: 'year sessions',
    //   populate: {
    //     path: 'sessions',
    //     select: 'subjects name',
    //     populate:{
    //       path:'subjects.subject',
    //       select: 'name'
    //     }
    //   }
    // })
    
    res.status(200).send(result);
  }catch(err){
    console.error(err);
    res.status(500).send(err)
  }
})

export default studentsRouter