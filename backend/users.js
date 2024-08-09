const express = require('express');
const router = express.Router();
const Form = require('../models/form.model'); // Adjust the path as needed

// Endpoint to get all users
router.get('/users', async (req, res) => {
  try {
    const users = await Form.find(); // Retrieve all user documents
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Error fetching user details.' });
  }
});

module.exports = router;
