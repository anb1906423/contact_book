const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    // res.json({ message: "Welcome to contact book application." });
    res.send('Welcome to homepage!');
});

module.exports = app;