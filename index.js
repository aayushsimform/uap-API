require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DB_URL;
const userRouter = require("./routes/Users");
const albumRouter = require("./routes/Album");
const photoRouter = require("./routes/Photos");


const app = express();

const cors = require('cors');
mongoose.connect(mongoString);
const database = mongoose.connection;
//if connection is not success
database.on('error', (error) => {
    console.log(error)
})

//if connection is success
database.once('connected', () => {
    console.log('Database Connected');
})
app.use(cors(
     { origin: '*'}
));
app.use(express.json());
app.use('/user',userRouter);
app.use('/album',albumRouter);
app.use('/photo',photoRouter);

app.get('/',(req,res)=>{
    res.send('Hello this is working Properly');
})
//start listening the server
app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})