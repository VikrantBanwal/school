// import http from 'http';
import express from 'express';
import mongoose from 'mongoose';
import classesRouter from './containers/classes/classes.routes.js';
import studentsRouter from './containers/students/students.routes.js';


const app = express();


// app.use(express.json())


app.use('/classes', classesRouter);
app.use('/students', studentsRouter);


// const server = http.createServer((req,res)=>{
//   if(req.url==='/home'){

//   }else if(){

//   }
// })


app.listen(3001,async ()=>{
  try{
    console.log('Server started at 3001');
    await mongoose.connect('mongodb://localhost/students');
    console.log('DB connected')
  }catch(err){
    console.error('Unable to start server',err);
    process.kill();
  }
})