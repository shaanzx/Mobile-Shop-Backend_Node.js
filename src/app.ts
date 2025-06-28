import express, {Express,Request,Response} from "express";

// 01. Initialize the express app
const app : Express = express();

// 02. Define the Middlewares
app.use(express.json());  /*Instruct to parse the request payload data to be converted to json*/

// 03. Define simple http request
app.get("/", (req : Request, res : Response) => {
    res.send("Request received...");
});

export default app;