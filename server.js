import express from 'express';
import MongoClient from 'mongodb';
import 'dotenv/config'; 


// creating a server
const dirname = import.meta.dirname;
const app = express();
const PORT = process.env.PORT || 3000;
const URI = process.env.DB_STRING

app.set('view engine', 'ejs');

// exttracting data from the form element and add them to the body property in the req object


// server
MongoClient.MongoClient.connect(URI)
  .then(client => {
    const db = client.db('toDoApp');
    const tasksCollection = db.collection('tasks')
    
  app.use(express.urlencoded({ extended: true}))


// main page
app.get('/', (req, res) => {
  // res.send("we are here");
  db.collection('tasks').find().toArray();
  res.render('index.ejs', {})
})

app.post('/addTask', (req, res) => {
  const task = {
    task: req.body.task,
    comleted: req.body.completed === 'true' ? true : false
  };

  tasksCollection
    .insertOne(req.body)
    .then(result => {
      console.log(result, task)
    })
    .catch(error => console.error(error));
  res.redirect('/');
})




    // listening requests
    
app.listen(PORT, () => {
  console.log("it's working");
})


}
)