import express from 'express';
import {getStudents,createStudent,deleteStudent} from '../controllers/student.js';



const studentRoutes = express.Router();

studentRoutes.get('/', getStudents);
studentRoutes.post('/', createStudent);
studentRoutes.delete('/:id', deleteStudent);



export {studentRoutes};