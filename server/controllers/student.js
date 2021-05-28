import StudentData from '../models/student.js';

const getStudents = async (req,res)=>{
    try{
        const allstudents = await StudentData.find();
        res.status(200).json(allstudents);
    }   
    catch(error){
        res.status(404).json({message: error.message})
    } 
}

const createStudent = async (req,res)=>{
    const student = req.body;
    // console.log(studentData);
    const newStudent = new StudentData(student);
    try {
        await newStudent.save();
        res.status(201).json(newStudent);
    } 
    catch (error) {
        res.status(409).json({message: error.message})
        console.log("NOT WORKING");
    }     
}

const deleteStudent = async (req,res)=>{
    const id = req.params.id;
    try {
        await StudentData.findByIdAndRemove(id).exec()
        res.send("Successfully deleted")
    } 
    catch (error) {
        console.log(error);
    }     
}


export {getStudents,createStudent,deleteStudent}