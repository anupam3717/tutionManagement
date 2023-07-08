require('dotenv').config();
const express=require('express')
const app=express()
const dbConnection=require('./database/connection')
const bodyParesr= require('body-parser');

app.use(bodyParesr.json());
app.use(bodyParesr.urlencoded({ extended: true }));

app.listen(process.env.port,()=>{
    console.log('hello')
})