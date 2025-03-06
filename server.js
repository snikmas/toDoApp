const express = require('express');
const mongodb = require('mongodb');

// creating a server
const app = express();
const PORT = process.env.PORT || 3000;

// exttracting data from the form element and add them to the body property in the req object
app.use(express.urlencoded({ extended: true}))


// main page
app.get('/', (req, res) => {
  // res.send("we are here");
  res.sendFile(__dirname + '/index.html');
})

app.post('/addTask', (req, res) => {
  console.log(res.body.value());
  console.log('oo')
  res.redirect('/');
})


// listening requests
app.listen(PORT, () => {
  console.log("it's working");
})