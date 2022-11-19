const express = require("express");
const path = require("path");
import { engine } from "express-handlebars";
import { upload } from "./middleware/upload";

import "./config/database";

require("dotenv").config();

import logger from "./middleware/logger.js";
import todosRouter from "./app/api/todos.js";
import usersRouter from "./app/api/users.js";
import todos from "./data.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.get("/todos", (req, res) => {
//   const todos = [
//     { id: 1, todo: "go to gym", completed: false },
//     { id: 2, todo: "go to university", completed: false },
//   ];
//   res.json(todos);
// });

//set handlebars engine
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

//home page route
app.get("/", (req, res) => {
  res.render("index", { title: "TODOs list", todos });
});

//init middleware
app.use("/api/todos", logger);

//init todos api router
app.use("/api/todos", todosRouter);
app.use("/api/users", usersRouter);

// configure public and uploads
app.use(express.static(__dirname + "/app/public"));
app.use("/uploads", express.static("uploads"));

// upload file
app.post("/uploadfile", upload.single("image"), (req, res) => {
  res.send("file uplaoded");
});

//call midleware to set static folder
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Express server is running on PORT ${PORT}...`);
});
