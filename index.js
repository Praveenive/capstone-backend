import  express  from "express";
import dotenv from 'dotenv'
import { dbConnection } from "./db.js";
import { userRouter } from "./Routes/users.js";
import { authenticated } from "./Controllers/auth.js";
import { queryRouter } from "./Routes/queries.js";
import { taskRouter } from "./Routes/task.js";
import cors from 'cors';

const app = express();
dotenv.config()
const PORT = process.env.PORT;

app.use(cors())
app.use(express.json())
dbConnection()

app.use("/user",userRouter)
app.use("/query",authenticated,queryRouter)
app.use("/task",authenticated,taskRouter)

app.listen(PORT,()=>console.log(`Server started in ${PORT}`))