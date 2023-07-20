const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const connectDb = require('./config/dbConnection');

const dotenv = require('dotenv').config();

const port = process.env.PORT || 5000;


connectDb();
const app = express();


app.use(express.json());
app.use('/api/contacts',require('./routes/contactRouts'));
app.use('/api/users',require('./routes/userRoutes'));

app.use(errorHandler);

app.listen(port,()=>{
    console.log(`Server runing on port ${port}`);
})