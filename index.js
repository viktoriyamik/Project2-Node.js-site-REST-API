require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
// read database url
const mongoString = process.env.DATABASE_URL;

// connect to mongo db
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();
app.use(cors())
app.use(express.json());

const routes = require('./routes/routes');

app.use('/api', routes)
// listen on port 3000
app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})