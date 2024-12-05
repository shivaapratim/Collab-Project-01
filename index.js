const express = require('express');

const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.static('public'));  
// app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(3000, () => {console.log('Server is running on port 3000')});    