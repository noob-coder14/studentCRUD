import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import {studentRoutes} from './routes/student.js';

const app = express();

app.use(express.json())

app.use('/students', studentRoutes);

app.use(cors({origin: 'http://localhost:3000'}));


const CONNECTION_URL = 'mongodb+srv://admin-shuhat:admin@cluster0.yg94n.mongodb.net/test';

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> app.listen(PORT, ()=> console.log(`Connection Established ${PORT}`)
))
.catch((err)=>
    console.log(err.message));

mongoose.set(`useFindAndModify`, false);

//43Mins