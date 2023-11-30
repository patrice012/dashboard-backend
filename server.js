const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
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
const DB_URI = process.env.DB_URI || 'mongodb://localhost:27017/dashboardDB';
mongoose.set("strictQuery", false);
mongoose.connect(DB_URI);

// test db connection
const db = mongoose.connection
db.once('open', _ => {
  console.log('Database connected:', DB_URI)
})
db.on('error', err => {
  console.error('connection error:', err)
})


// user endpoint
app.use('/user', userRoute)


// open port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
})