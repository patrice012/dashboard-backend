const express = require('express');
const cors = require('cors');
const { PORT, DB_URI, ORIGIN } = require('./config');
const mongoose = require('mongoose');

const app = express();
const userRoute = require('./routes/user');

// middleware
app.use(express.urlencoded({ extended: false }));
// body parsing
app.use(express.json());


// cors
app.use(
  cors({
    origin: ORIGIN,
    optionSuccessStatus: 200,
  })
);

// set headers globally
app.use((req, res, next) => {
  res.set({
    "Access-Control-Allow-Origin": ORIGIN,
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH",
    "Access-Control-Allow-Headers": "Origin, Content-Type, Accept",
  });
  next();
});


// connect to DB
const db_uri = DB_URI || 'mongodb://localhost:27017/dashboardDB';
mongoose.set("strictQuery", false);
mongoose.connect(db_uri);

// test db connection
const db = mongoose.connection
db.once('open', _ => {
  console.log('Database connected:', DB_URI)
})
db.on('error', err => {
  console.error('connection error:', err)
})


// user endpoint
app.use('/data', userRoute)


// open port
const port = PORT || 3000;
app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
})