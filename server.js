const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv').config();

const form = require('./modals/form.modal')


const app = express();

const url = process.env.ATLAS_URL;


app.use(cors())

app.use(express.json())



mongoose.connect(url);


const connection = mongoose.connection;

connection.once('open',() => {
    console.log("database connected!")
})


app.post('/form',(req,res) => {
    const{name,email} = req.body;
    const formData = new form({name,email});

    formData.save();
})

app.listen('8001', () => {
    console.log("app running on port 8001")
})