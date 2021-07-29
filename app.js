const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
});

app.get('/registrarse', (req,res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'));
});

app.get('/login', (req,res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'));
});

app.use(express.static('public'))

app.listen(process.env.PORT || 3030, ()=> 
{
    console.log('La app está funcionando en http://localhost:3030');
});
