import mongoose from 'mongoose';

const studentSchema = mongoose.Schema({
    regNo: Number,
    studentName: String,
    grade: String,
    section: {
        type: String,
        default: 'C'
    }
    // subjects: [String] 
    //array, but array er vitore string
});



const student = mongoose.model('student', studentSchema);


//model name: student
//collection name: students
//collection schema: studentSchema

export default student;

