import { Router } from "express";
import classesSchema from "./classes.schema.js";

const classesRouter = Router();




classesRouter.get('/',async (req,res)=>{
  try{
    const result = await classesSchema.find({})
    res.status(200).send(result);
  }catch(err){
    console.error(err);
    res.status(500).send(err)
  }
})

export default classesRouter