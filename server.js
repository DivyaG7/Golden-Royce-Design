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


// server.js (or index.js)

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const atlasUrl = process.env.ATLAS_URL;

// Connect to MongoDB Atlas (replace 'YOUR_ATLAS_URI' with your actual URI)
mongoose.connect(atlasUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Define a Mongoose schema and model
const userSchema = new mongoose.Schema({
  name: String,
  email: String
});

const User = mongoose.model('User', userSchema);

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Route handler to handle form submission
app.post('/api/submitFormData', async (req, res) => {
  const formData = req.body;

  try {
    // Create a new user document
    const newUser = new User(formData);

    // Save the user document to the database
    await newUser.save();

    res.status(201).json({ message: 'User data stored successfully' });
  } catch (error) {
    console.error('Error storing user data:', error);
    res.status(500).json({ message: 'Error storing user data' });
  }
});

// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
