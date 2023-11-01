const express = require('express');
const mongoose = require('mongoose');
const moment = require('moment-timezone');
const app = express();
const port = process.env.PORT || 3000;

const uri = 'mongodb+srv://kircher32245:Wjjehe32245!!@mariokartcluster.upgwvac.mongodb.net/?retryWrites=true&w=majority'
app.use(express.static(__dirname));
app.use(express.json());

// Connect to your MongoDB database
async function connect() {
    try {
        await mongoose.connect(uri);
        console.log("Connected to MongoDB");
    }   catch (error) {
        console.error(error);
    }
}

connect();

// Define a mongoose schema for race scores (assuming you have a 'scores' collection)
const scoreSchema = new mongoose.Schema({
  teamKircherScore: Number,
  teamJMOscore: Number,
  individualKircherScore: Number,
  individualJMOscore: Number,
  submissionDate: Date
});

// Create a model for the 'scores' collection based on the schema
const Score = mongoose.model('races', scoreSchema);

app.get('/', async (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/app.js', async (req, res) => {
  res.type('text/javascript');
  res.sendFile(__dirname + '/app.js');
});

app.post('/save-score', async (req, res) => {
    const {
      teamKircherScore,
      teamJMOscore,
      individualKircherScore,
      individualJMOscore
    } = req.body;
  
    // Convert the current time to Eastern Standard Time (EST)
    const submissionDate = moment().tz('America/New_York').format();
  
    const newScore = new Score({
      teamKircherScore,
      teamJMOscore,
      individualKircherScore,
      individualJMOscore,
      submissionDate
    });
  
    newScore
      .save()
      .then(() => {
        res.status(200).send('Score saved successfully');
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send('Error saving score');
      });
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get('/get-scores', async (req, res) => {
    try {
      const scores = await Score.find({}).exec();
      res.json(scores);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching scores');
    }
  });
