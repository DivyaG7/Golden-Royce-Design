const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv').config();

const form = require('./modals/form.modal')


const app = express();

const url = process.env.ATLAS_URL;


app.use(cors())

app.use(express.json())


// Connect to MongoDB using the connection string from the environment variable
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });



const connection = mongoose.connection;

connection.once('open',() => {
    console.log("database connected!")
})


app.post('api/form',(req,res) => {
    const{name,email} = req.body;
    const formData = new form({name,email});

    formData.save();
})

app.listen('8001', () => {
    console.log("app running on port 8001")
})