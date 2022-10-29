const express = require ("express");
const path = require("path");
import { engine } from 'express-handlebars';

require('dotenv').config();


import logger from "./middleware/logger.js";
import todosRouter from "./app/api/todos.js";
import todos from "./data.js";

const app =  express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));



//set handlebars engine
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

//home page route
app.get("/", (req, res)=>{
res.render("index",
{title:"TODOs list", 
todos})
});



//init middleware
app.use("/api/todos", logger);

//init todos api router
app.use("/api/todos", todosRouter);


//call midleware to set static folder
app.use(express.static(path.join(__dirname, "public")))

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> {console.log(`Express server is running on PORT ${PORT}...`)});