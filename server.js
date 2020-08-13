// Setup empty JS object to act as endpoint for all routes

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
const bodyParser = require('body-parser')
//Here we are configuring express to use body-parser as middle-ware.
// Cors for cross origin allowance
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 8000;
/* Spin up the server*/
const server = app.listen(port, listening);
 function listening(){
    // console.log(server);
    console.log(`running on localhost: ${port}`);
};

//Get routes set up
app.get("/database", (req, res) => {
    res.json(projectData);
  });

// Post routes set up
app.post('/all', callBack);

function callBack(req,res){
  res.send('POST received');
};

let projectData = {};

app.post('/database', addDatabase);

function addDatabase(req,res){
  newEntry = {
  temperature: req.body.temperature,
  date: req.body.date,
  feeling: req.body.feeling
  }
  // projectData.push(req.body);
  projectData = newEntry;
  console.log(projectData);
};