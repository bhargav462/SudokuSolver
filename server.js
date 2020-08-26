const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const publicDirectoryPath = path.join(__dirname,'/public');
app.use(express.static(publicDirectoryPath))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(req,res) => {
    res.render('index');
})

var port = process.env.PORT || 3000;

app.listen(port,(res) => {
    console.log(`Server is up on port ${port}`);
})

