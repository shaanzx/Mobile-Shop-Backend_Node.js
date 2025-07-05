// import express, {Express, Request, Response} from "express";
import app from "./app";
import dotenv from "dotenv";

dotenv.config(); //Loading all Environment Variables from .env

/*// 01. Initialize the express app
const app : Express = express();*/

// 02. Define the application port
const port  = process.env.PORT;

/*// 03. Define simple http request
app.get("/", (req : Request, res : Response) => {
    res.send("Request received...");
});*/

//. 04. Instructs the express app to listen on port 3000
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});