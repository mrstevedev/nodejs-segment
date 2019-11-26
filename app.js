const Analytics = require('analytics-node');
const analytics = new Analytics('OB1ItDRUWAhxP6NTOZsevPujyzwQNyX5');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// Set Body Parser 
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Set View Engine
app.set('views', path.join(__dirname, '/views')); 
app.set('view engine', 'ejs');


app.get('/', (req, res, next) => {
    res.send('Home route');
}); 

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Application started on PORT ${PORT}`));