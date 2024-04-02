require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 5000;
const connectDb = require('./utils/db');
const errorMiddleware = require('./middlewares/error-middleware');
const cors = require('cors');

// handling cors policy
// const corsOptions = {
//     origin:"http://localhost:5173",
//     methods:"GET, POST, PUT, PATCH, DELETE, HEAD",
//     credentials:true
// }
app.use(cors());

app.use(express.json());
// this middleware is responsible for parsing the JSON data in req body.  
app.use("/api/auth",require('./routes/auth-router'));
app.use("/api",require("./routes/contact-router"));
app.use("/api/servicedata",require("./routes/service-router"));
// here start admin routes
app.use("/api/admin",require('./routes/admin-router'));


app.use(errorMiddleware);
connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`App is running on ${PORT}`)
    })
})

