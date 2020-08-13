// Setup empty JS object to act as endpoint for all routes
const projectData = [];
// Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
// Cors for cross origin allowance
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

const port = 8000;
// Spin up the server
const server = app.listen(port, listening);
 function listening(){
    // console.log(server);
    console.log(`running on localhost: ${port}`);
};
// Callback to debug
// Initialize all route with a callback function
app.get('/database', (req, res) => {
    res.json(projectData);
  });

// Callback function to complete GET '/all'
function getData(req, res){
    console.log('probably no error?');
};

// Post Route
app.post('/database', adddatabase);

function adddatabase(req,res){
  newEntry = {
    animal: req.body.animal,
    facts: req.body.fact,
    fav: req.body.fav
  }
  projectData.push(newEntry)
  console.log(newEntry)
}
  