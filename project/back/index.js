const express = require("express");
const app = express();
const cors= require("cors");
const connectdb = require("./config/dbconnection.js");
connectdb()
app.use(cors());
app.use(express.json()); // to
app.get('/', (req, res) => 
res.status(200).json({message:'welcome to connection application'}));


app.use('/api/auth',require('./routes/authRoutes.js'))
app.use('/api/parlour',require('./routes/parlourRoutes.js'))
app.use('/api/book',require('./routes/visitRoutes.js'))


const port = 7000;
app.listen(port, console.log(`Server is running at http://localhost:${port}`));
