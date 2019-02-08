const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect("mongodb://goweek:goweek123@ds133231.mlab.com:33231/weekomnistack", {
    usNewParser: true    
});

app.use(express.json());//Inform all routes use json
app.use(require('./routes'));

/*app.get('/', (req, res) => {
    return res.send('Hello Word')
});*///Send menssage in window

app.listen(3000, () => {
    console.log('server started on port : 3000')
});