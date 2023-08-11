const express = require('express');
const { chats } = require('./data/data');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

//API created
app.get('/', (req, res) => {
    res.send('API is Running...');
});

app.get('/api/chat', (req,res) => {
    res.send(chats)
});

app.get('/api/chat/:id', (req,res) => {
    // console.log(req.params.id);
    const singlechat = chats.find((c) => c._id === req.params.id);
    res.send(singlechat);
    
});

const PORT = process.env.PORT || 5000

//new web server started
app.listen(${PORT}, console.log('Server started on PORT ${PORT}'));   