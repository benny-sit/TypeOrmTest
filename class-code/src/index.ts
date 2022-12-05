import express = require("express");
import { AppDataSource } from "./data-source";
import { User } from "./entity/User";
import { UserData} from './entity/UserData'
import { userRouter } from "./routers/User/router";


AppDataSource.initialize().then(async () => {

    const app = express()
    app.use(express.json())

    app.use('/users', userRouter)

    app.listen(process.env.SERVER_PORT, () => {
        console.log("listening on port " + process.env.SERVER_PORT);
    }) 

}).catch(error => console.log(error))
