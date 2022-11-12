import mongoose from "mongoose";

const database_url = "localhost:27017";
const database_name = "todoscours";
const database_user = null;
const database_password = null;

//const URL = `mongodb://${database_user}:${database_password}@${database_url}/${database_name}`
const URL = `mongodb://${database_url}/${database_name}`;
const database =  mongoose.connect(
    URL
).then( ()=>{
    console.log("Successfully connected to database")
}

).catch( (err)=>{
    console.log("dtabasa connexion error::::", err)
}

);

export default database