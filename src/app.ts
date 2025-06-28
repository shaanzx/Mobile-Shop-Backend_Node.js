import express, {Express,Request,Response} from "express";

// 01. Initialize the express app
const app : Express = express();

// 03. Define simple http request
app.get("/", (req : Request, res : Response) => {
    res.send("Request received...");
});

export default app;