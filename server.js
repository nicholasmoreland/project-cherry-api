require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT;

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Connected to database'));

/* Enable CORS for all routes */
app.use(cors());

/* Parse incoming JSON data */
app.use(express.json());

/* User routes */
const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

/* Starting up server */
app.listen(port, () => {
    console.log('Server running at http://127.0.0.1:', port);
});

