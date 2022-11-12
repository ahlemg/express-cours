
import Todo from "../models/todo";

const createTodo = ({userId, todo, todoId, completed}) => {

    const newTodo = new Todo({userId, todo, todoId, completed});
   return newTodo.save()
    .then ( (res) => res)
    .catch( (err)=> {
        console.log("ERROR==>services=>todo=>createTodo:::",err);
        return null;
    }

    )

} 

export default {
    createTodo
}