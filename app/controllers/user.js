import crudService from "../services/crud";
import User from "../models/user";
import Todo from "../models/todo";
export const addNewUser = async (req, res) => {
  const { email, fname, lname } = req.body;

  if (!email)
    return res
      .status(400)
      .json({ msg: "veuillez introduire les informations correctement" });
  const new_user = {
    email,
    fname,
    lname,
  };
  //todos.push(new_todo)
  //res.status(201).json(new_todo);
  const create = await crudService.create(new_user, User);

  if (!create) return res.status(500).json({ msg: "Internal server error" });

  res.status(201).json({
    msg: "create with success",
    new: create,
  });
};

export const getAllUsers = async (req, res) => {
  const users = await crudService.get(null, User);
  if (!users) return res.status(500).json({ msg: "Internal server error" });
  res.status(200).json({ msg: "get with success", users: users });
};

export const getUserById = async (req, res) => {
  const id = req.params.id;
  const user = await crudService.get(id, User, "todos");
  if (!user) return res.status(500).json({ msg: "Internal server error" });
  res.status(200).json({ msg: "get with success", user: user });
};

export const updateUserById = async (req, res) => {
  const userId = req.params.id;
  const user = await User.findById(userId);
  if (!user) {
    return res.status(404).send("Not found");
  }
  const update = await crudService.update(userId, req.body, User);
  if (!update) return res.status(500).json({ msg: "Internal server error" });
  res.status(200).json({
    msg: "update with success",
    new: update,
  });
};

export const deleteUserById = async (req, res) => {
  const userId = req.params.id;
  const user = await User.findById(userId);
  if (!user) {
    return res.status(404).send("Not found");
  }
  const del = await crudService.del(userId, User);
  if (!del) return res.status(500).json({ msg: "Internal server error" });
  res.status(200).json({
    msg: "delete with success",
  });
};

export const addOneTodoToUser = async (req, res) => {
  const userId = req.params.id;
  const user = await crudService.get(userId, User, null);
  const todo = await crudService.get(req.body.todoId, Todo, null);
  if (!user || !todo) {
    return res.status(404).send("Not found");
  }
  await User.findOneAndUpdate(
    { _id: req.params.id },
    { $push: { todos: todo._id } },
    { new: true, useFindAndModify: false }
  );
  res.status(201).send("todo added to user");
};
