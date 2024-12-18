const express = require('express');

const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views',path.resolve('./views'));
app.use(express.static(path.resolve('./public')));

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(3000, () => {console.log('Server is running on port 3000')});    