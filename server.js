const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const PORT = 8080

const app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client/public')));



app.listen(PORT, () => {
    console.log("App is listening on port: " + PORT)
})