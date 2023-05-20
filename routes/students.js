const express = require('express');
const router = express.Router();
var Student = require('../models/student.js');
const {getStudents,addStudents,deleteStudent,updateStudent,addNameUnique} = require("../services/students.js");
//router.get('/findByName/:name',findStudentByName);
router.post('/',addNameUnique);
router.get('/',getStudents);
//router.post('/',addStudents);
router.delete('/delete/:id',deleteStudent);
router.put('/update/:id',updateStudent);



module.exports =router;
