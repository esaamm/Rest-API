import express from "express"; // === const express=require('express');
import bodyParser from "body-parser"; // allows to take incoming post request bodies
import usersRoutes from './routes/users.js';

const app = express(); // Our whole app is in this .
const PORT = 5000;

app.use(bodyParser.json());

// Making get request.When we visit the url we make a get request to the server.Its same as we visit google.com we make get req to google server.
app.get('/',(req,res)=>{
    console.log('[TEST]!');

    
    res.send('Hello from Homepage');
});

app.use('/users',usersRoutes);

app.listen(PORT, () =>
  console.log(`Server Running on port: http://localhost:${PORT}`)
);
