import User from "../models/user";


const findUser = (query, filters = "-_id") => {

return User.findOne(query, filters)
.then( (res) => res)
.catch( (err)=> {
console.log("ERROR===> user Services===>findUser::::",err);
return null;
})

}

export default {
    findUser 
}