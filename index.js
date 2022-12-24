const Joi = require('joi');
const express = require('express');
const app = express();

// Adding Route

//PORT
const port = process.env.PORT || 1000;
app.listen(port, () => {
    console.log(`Listening on Port ${port}...`);
});