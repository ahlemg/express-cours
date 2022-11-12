import express from "express";
import uuid from "../helpers/uuid";

import todos  from "../../data.js";
import todoService from "../services/todo";
import todo from "../services/todo";

const router = express.Router();

//get single todo
router.get("/:id", (req,res) =>{
    const id = req.params.id;
   const todo =  todos.find(x => x.id == id);
   if(!todo) return res.status(400).json({msg:`No todo with id ${id}`})
    res.json(todo);

});

//get all todos
router.get("/", (req,res) =>{
    res.json(todos);

});
//add a  todo
router.post("/", async (req,res) =>{
    const {userId, title, completed} = req.body;
    if(!userId||!title) return res.status(400).json({msg:"veuillez introduire les informations correctement"})
    const new_todo={
        todoId: uuid({prefix: "TDO"}),
        userId,
        todo: title,
        completed
    };
    //todos.push(new_todo)
    //res.status(201).json(new_todo);
    const create = await todoService.createTodo(new_todo);
    console.log("create todo result::::",create);
    if (!create) return res.status(500).json({msg:"Internal server error"});
    res.status(201).json({
        msg:"create with success",
        new: create

    })

    //res.redirect("/");

}); 

router.patch("/:id",(req,res) => {
    console.log(console.log(req.body));
    const pos = todos.findIndex(x => x.id == parseInt(req.params.id));

    if (pos == -1) return res.status(400).json({msg:`No todo with id ${req.params.id}`});
    const {title, completed} = req.body;
    if (todos[pos].completed != completed ) todos[pos].completed = completed;
    if (todos[pos].title != title ) todos[pos].title = title;
    res.json({msg:"todo updated", todo:todos[pos]});

});
export default router;