const express = require('express')
const mongoose = require("mongoose")
const bodyParser = require('body-parser')
const path = require('path')
const routes = require("./routes")

const PORT = 8080

const app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client/public')));
app.use(routes)

// Connect to the Mongo DB
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost:27017/sbp', { useNewUrlParser: true }
);

// Starts the express server
app.listen(PORT, () => {
    console.log("App is listening on port: " + PORT)
})