const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require("./routes");

const app = express();

mongoose.connect("mongodb+srv://renan:renan@cluster0.8styg.mongodb.net/propertiesManagement?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }
);

app.use(cors());
app.use(express.json());
app.use(routes);

module.exports = app;