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
const router = express.Router();
const Form = require('./modals/form.modal'); // Import the Form model

// Route to get all users
router.get('/users', async (req, res) => {
  try {
    const users = await Form.find(); // Fetch all users
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Error fetching users.' });
  }
});

// Route to post form data
router.post('/form', async (req, res) => {
  const { name, email } = req.body;
  try {
    const formData = new Form({ name, email });
    await formData.save();
    res.status(201).json({ message: 'Form data saved successfully' });
  } catch (error) {
    console.error('Error saving form data:', error);
    res.status(500).json({ message: 'Error saving form data' });
  }
});

module.exports = router;
