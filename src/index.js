require('dotenv').config();
const express = require('express');
const bookRoutes = require('./routes/books')
const app = express();

app.use(express.json());

app.get('/hi', (req, res) => {
    res.send("Hello World!")
})

app.use(bookRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server Running on Port: ${process.env.PORT}`);
})