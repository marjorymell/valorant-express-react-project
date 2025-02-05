require('dotenv').config();
const express = require('express');
const connectDB = require('./config/database');

const app = express();

connectDB();
app.use(express.json());
app.get('/', (req, res) => {
  res.send('API Running');
});


const PORT = process.env.PORT || 3500;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));