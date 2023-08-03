const express = require('express');
const { chats } = require('./data/data');

const app = express();

//API created
app.get('/', (req, res) => {
    res.send('API is Running...');
});

app.get('/api/chat', (req,res) => {
    res.send(chats)
});

app.get('/api/chat/:id', (req,res) => {
    console.log(req);
    
});

//new web server started
app.listen(5000, console.log("Server started on PORT 5000"));   