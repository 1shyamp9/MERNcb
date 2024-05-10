import { DB } from "./Database/database.js";
import { app } from "./app.js"; 

DB;

app.listen(process.env.PORT ,()=>{
    console.log(`Server is Running 👌 PORT ${process.env.PORT}`);
})