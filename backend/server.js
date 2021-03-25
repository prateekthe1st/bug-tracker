const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cookieParser = require('cookie-parser');


require('dotenv').config();

app.disable('x-powered-by');

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))
app.use(cookieParser());

const indexRoute = require('./routes/index');
app.use('/api', indexRoute);

const PORT = process.env.PORT || 4000;

mongoose.connect(
    process.env.DB_USER,{ 
        useNewUrlParser: true ,
        useUnifiedTopology: true ,
        useFindAndModify: false,
        useCreateIndex: true
    }).then(
        () => {
            console.log("Connected to Mongoose Database");
        }, err => {
            console.log(err.message);
        }
    );

app.listen(PORT, () => {
    console.log(`Listening at ${PORT}`)
})

