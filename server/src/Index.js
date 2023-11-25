import { app } from "./app.js";
import dotenv from "dotenv";
import { connectDB } from "./database/db.js";

dotenv.config({
    path: ".env",
});


const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}...`);
    // console.log(process.env.PORT)
})
connectDB(process.env.MONGO_URI);