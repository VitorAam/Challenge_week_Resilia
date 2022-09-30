import express from "express";
import {StudentsController} from './src/controller/studentsController.js';
import dotenv from "dotenv";
import cors from 'cors';

const app = express();
const port =  process.env.PORT || 3001;
dotenv.config();
app.use(cors())

app.listen(port, ()=>{console.log(`Servidor online no endereço http://localhost:${port}`)});

app.use(express.json());

StudentsController.rotas(app)