import {connect} from "mongoose";

(async () =>{
    try {
        const db = await connect(process.env.MONGOATLAS)
        console.log('DB connected to ', db.connection.name);
    } catch (error) {
        console.error(error)
    }
})();