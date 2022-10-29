import express from "express";
import {v4 as uuidv4} from "uuid";

import todos  from "../../data.js";

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
router.post("/", (req,res) =>{
    const {userId, title} = req.body;
    if(!userId||!title) return res.status(400).json({msg:"veuillez introduire les informations correctement"})
    const new_todo={
        id: uuidv4(),
        userId: parseInt(userId),
        title,
        completed: completed || false,
    };
    todos.push(new_todo)
    //res.status(201).json(new_todo);
    res.redirect("/");

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