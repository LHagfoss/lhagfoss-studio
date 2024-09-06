const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname));

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/home/digital-studio', (req, res) => {
    res.sendFile(path.join(__dirname, 'digital-studio', 'index.html'));
});

app.get('/home/digital-studio', (req, res) => {
    res.sendFile(path.join(__dirname, 'home', 'index.html'));
});

app.listen(3000, () => {
    console.log('Server is running on http://127.0.0.1:3000');
});
