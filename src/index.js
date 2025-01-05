require('dotenv').config();
const express = require('express');
const bookRoutes = require('./routes/books')
const app = express();

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');


app.use(express.json());

app.get('/hi', (req, res) => {
    res.send("Hello World!")
})

app.use(bookRoutes)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(process.env.PORT, () => {
    console.log(`Server Running on Port: ${process.env.PORT}`);
})