import moment from "moment";


//logger middleware
const logger = (req, res, next) =>{
    console.log(`${req.method} ${req.protocol}://${req.headers.host}${req.path} ${moment().format('MMMM Do YYYY, h:mm:ss a')}` );
    next(); //pour executer next middleware in the middleware stack
}

export default logger;