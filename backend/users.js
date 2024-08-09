const express = require('express');
const router = express.Router();
const Form = require('./models/form.model'); // Import the Form model

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
