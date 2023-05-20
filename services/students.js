const express = require('express');
const router =express.Router();

var Student  = require('../models/student.js');


const getStudents =(req,res,next) => {
    Student.find((err,students)=>{
    if(err) {
        console.log('error :' ,err)
    }
    else {
        res.json({title :"listes des student",cont:students});
    }

    });
  //  res.json({message :'hello World how are '});
};

 const addStudents=(req,res,next)=>{
    var student = new Student({Name: req.body.StudentName,Age: req.body.StudentAge});
    student.save((err,newStudent)=> {
        if(err) {
            console.log('there is ana error :' ,err);

        } else{
            res.json(newStudent);
        }
    })
};

const deleteStudent =(req,res,next)=> {

    Student.findByIdAndDelete(req.params.id,(err,cont)=>{
        if (err){console.log(err)}
        else 
        {
            res.json({message:'Done'})
        }
    });


  }
  const findStudentByName = (req,res,next) =>{
    console.log('req', req.params.name)
    Student.find({Name:req.params.name},
        (err,students)=>{
            if(err){
                console.log(err)
            }
            else
            {
                console.log(students)
                res.json(students);
            }
            
        })
  };


  const updateStudent=(req,res,next) => {
    Student.findByIdAndUpdate(req.params.id,
        {Name:req.body.StudentName,Age:req.body.StudentAge},
        (err,student)=>
    {
        if(err) {
            console.log(err)
        }
        else {
            res.json(student)
            console.log("valide");
        }

    })
  };

  const addNameUnique =(req,res,next)=>{

    var student=new Student({Name:req.body.StudentName,Age:req.body.StudentAge});
    Student.findOne({Name:student.Name},(err,student)=>{
    
        if(err){
          
            console.log(err)
        } else if(student != null){

            res.json({message:'Name already exist'})
        } else if(student == null){

        new Student({Name:req.body.StudentName,Age:req.body.StudentAge}).save((err,students)=>{
                if(err){
                    console.log('there is an error:',err);
                    }else{
                       res.json(students);
                    }
                 })
        }
    
    
    })
 

};
  

module.exports= {getStudents,addStudents,deleteStudent,updateStudent,addNameUnique}