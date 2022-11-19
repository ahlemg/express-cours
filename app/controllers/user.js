import crudService from "../services/crud";
import User from "../models/user";
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
