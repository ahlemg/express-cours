import crudService from "../services/crud";
import Todo from "../models/todo";
import uuid from "../helpers/uuid";

export const getTodoById = async (req, res) => {
  const id = req.params.id;
  const todo = await crudService.get(id, Todo);
  if (!todo) return res.status(500).json({ msg: "Internal server error" });
  res.status(200).json({ msg: "get with success", todo: todo });
};

export const getAllTodos = async (req, res) => {
  const todos = await crudService.get(null, Todo);
  if (!todos) return res.status(500).json({ msg: "Internal server error" });
  res.status(200).json({ msg: "get with success", todos: todos });
};

export const addNewTodo = async (req, res) => {
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
};
