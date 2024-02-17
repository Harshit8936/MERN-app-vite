require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 5000;
const connectDb = require('./utils/db');
const errorMiddleware = require('./middlewares/error-middleware');

app.use(express.json());
// this middleware is responsible for parsing the JSON data in req body.  
app.use("/api/auth",require('./routes/auth-router'));
app.use("/api",require("./routes/contact-router"));


app.use(errorMiddleware);
connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`App is running on ${PORT}`)
    })
})

