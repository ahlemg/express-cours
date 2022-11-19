import express from "express";
import uuid from "../helpers/uuid";

import todos from "../../data.js";
import todoService from "../services/todo";
import todo from "../services/todo";
import Todo from "../models/todo";
import crudService from "../services/crud";

const router = express.Router();

//get single todo
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  //  const todo =  todos.find(x => x.id == id);
  //  if(!todo) return res.status(404).json({msg:`No todo with id ${id}`})
  //   res.json(todo);
  const todo = await crudService.get(id, Todo);
  if (!todo) return res.status(500).json({ msg: "Internal server error" });
  res.status(200).json({ msg: "get with success", todo: todo });
});

//get all todos
router.get("/", async (req, res) => {
  const todos = await crudService.get(null, Todo);
  if (!todos) return res.status(500).json({ msg: "Internal server error" });
  res.status(200).json({ msg: "get with success", todos: todos });
});
//add a  todo
router.post("/", async (req, res) => {
  const { userId, title } = req.body;
  if (!userId || !title)
    return res
      .status(400)
      .json({ msg: "veuillez introduire les informations correctement" });
  const new_todo = {
    todoId: uuid({ prefix: "TDO" }),
    user: userId,
    todo: title,
  };
  //todos.push(new_todo)
  //res.status(201).json(new_todo);
  const create = await crudService.create(new_todo, Todo);
  console.log("create todo result::::", create);
  if (!create) return res.status(500).json({ msg: "Internal server error" });
  res.status(201).json({
    msg: "create with success",
    new: create,
  });

  //res.redirect("/");
});

router.patch("/:id", (req, res) => {
  console.log(console.log(req.body));
  const pos = todos.findIndex((x) => x.id == parseInt(req.params.id));

  if (pos == -1)
    return res.status(400).json({ msg: `No todo with id ${req.params.id}` });
  const { title, completed } = req.body;
  if (todos[pos].completed != completed) todos[pos].completed = completed;
  if (todos[pos].title != title) todos[pos].title = title;
  res.json({ msg: "todo updated", todo: todos[pos] });
});
export default router;
