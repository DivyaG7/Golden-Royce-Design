import mongoose from 'mongoose';

// Define your Mongoose schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String
});

let User;

// Initialize the Mongoose model
try {
  // Use an existing Mongoose model if available
  User = mongoose.model('User');
} catch {
  // Create a new Mongoose model if not available
  User = mongoose.model('User', userSchema);
}

// Connect to MongoDB Atlas using environment variable
const atlasUrl = process.env.ATLAS_URL;

mongoose.connect(atlasUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

export default async function handler(req, res) {
  if (req.method === 'POST') {
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
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
