import express from "express";
import uuid from "../helpers/uuid";

import todos from "../../data.js";
import todoService from "../services/todo";
import todo from "../services/todo";
import Todo from "../models/todo";
import crudService from "../services/crud";
import {
  getTodoById,
  getAllTodos,
  addNewTodo,
  updateTodoById,
  deleteTodoById,
} from "../controllers/todo";

const router = express.Router();

//get single todo
router.get("/:id", getTodoById);

//get all todos
router.get("/", getAllTodos);
//add a  todo
router.post("/", addNewTodo);

//update todo 
router.put("/:id",updateTodoById)


//delete todobyid
router.delete("/:id",deleteTodoById)

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
