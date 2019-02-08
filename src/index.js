const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);//real time

mongoose.connect("mongodb://goweek:goweek123@ds133231.mlab.com:33231/weekomnistack", {
    usNewParser: true    
});

app.use((req, res, next) =>{
    req.io = io;

    return next();
});

app.use(cors());
app.use(express.json());//Inform all routes use json
app.use(require('./routes'));

/*app.get('/', (req, res) => {
    return res.send('Hello Word')
});*///Send menssage in window

server.listen(3000, () => {
    console.log('server started on port : 3000')
});