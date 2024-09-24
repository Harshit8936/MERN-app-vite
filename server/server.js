require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 5000;
const connectDb = require('./utils/db');
const errorMiddleware = require('./middlewares/error-middleware');
const cors = require('cors');
const path = require('path');

// handling cors policy
// const corsOptions = {
//     origin:"http://localhost:5173",
//     methods:"GET, POST, PUT, PATCH, DELETE, HEAD",
//     credentials:true
// }

app.use(express.json());
const _dirname = path.dirname("");
const buildPath = path.join(_dirname,"../client/dist");
app.use(express.static(buildPath));
app.use(cors({
    origin:"*"
}));

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

