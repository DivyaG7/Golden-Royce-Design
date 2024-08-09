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

// app.post('/form', async (req, res) => {
//   const { name, email } = req.body;
//   const formData = new form({ name, email });

//   await formData.save();
//   res.status(201).json({ message: 'Form data saved successfully' });
// });


// const port = process.env.PORT || 8001;
// app.listen(port, () => {
//     console.log(`Server started on port ${port}`);
// });



const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Import routes
const userRoutes = require('./users'); // Import users.js from the same directory

const app = express();
const url = process.env.ATLAS_URL;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

// Use routes
app.use('/api', userRoutes); // Mount routes at /api

// Start server
const port = process.env.PORT || 8001;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
