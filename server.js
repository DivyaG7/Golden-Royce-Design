// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors')
// require('dotenv').config();

// const form = require('./modals/form.modal')


// const app = express();

// const url = process.env.ATLAS_URL;


// app.use(cors())

// app.use(express.json())


// // Connect to MongoDB using the connection string from the environment variable
// mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log("Connected to MongoDB");
//   })
//   .catch((err) => {
//     console.error("Error connecting to MongoDB:", err);
//   });



// const connection = mongoose.connection;

// connection.once('open',() => {
//     console.log("database connected!")
// })


// app.post('/form',(req,res) => {
//     const{name,email} = req.body;
//     const formData = new form({name,email});

//     formData.save();
// })

// app.listen('8001', () => {
//     console.log("app running on port 8001")
// })


// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://divya:grd@cluster0.lt2scbf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Define a schema for your data
const formDataSchema = new mongoose.Schema({
  name: String,
  email: String
});

const FormData = mongoose.model('FormData', formDataSchema);

app.use(bodyParser.json());

// Handle form submission
app.post('/submit-form', async (req, res) => {
    try {
      const formData = new FormData({
        name: req.body.name,
        email: req.body.email
      });
      await formData.save();
      res.status(201).json({ message: 'Form data saved successfully' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
