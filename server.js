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

connection.once('open', () => {
    console.log("database connected!")
})


// Handle POST requests to /form endpoint
app.post('/form', (req, res) => {
    const { name, email } = req.body;
    const formData = new form({ name, email });

    formData.save()
        .then(() => {
            res.status(200).send("Form data saved successfully");
        })
        .catch((err) => {
            console.error("Error saving form data:", err);
            res.status(500).send("Error saving form data");
        });
});

const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});