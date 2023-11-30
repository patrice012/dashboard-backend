const express = require('express');
const mongoose = require('mongoose');
// create express app
const app = express();
// import route
const userRoute = require('./routes/user');

// middleware
app.use(express.urlencoded({ extended: false }));
// body parsing
app.use(express.json());

// connect to DB
const db_URI = 'mongodb://localhost:27017/dashboard';
mongoose.set("strictQuery", false);
mongoose.connect(db_URI);

// test db connection
const db = mongoose.connection
db.once('open', _ => {
  console.log('Database connected:', db_URI)
})
db.on('error', err => {
  console.error('connection error:', err)
})

// testing
app.get('/', (req, res) => {
  console.log(req);
  res.send('working')
})

// user endpoint
app.use('/user', userRoute)


// open port
const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
})