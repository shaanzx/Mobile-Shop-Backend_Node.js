import express, {Express,Request,Response} from "express";
import productRoutes from "./routes/product.routes"
import contactRouter from "./routes/contact.routes";
import cors from "cors"

// 01. Initialize the express app
const app : Express = express();

// 02. Define the Middlewares
app.use(express.json());  /*Instruct to parse the request payload data to be converted to json*/

app.use(cors()); /*Enable or Allow CORS Requests*/

const allowedOrigins = [
    "http://localhost:5173",
]
const corsOptions = {
    origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"))
        }
    }
}

app.use(cors(corsOptions));
app.use("/api/products" , productRoutes);
app.use("/api/contact" , contactRouter);


// 03. Define simple http request
app.get("/", (req : Request, res : Response) => {
    console.log(req.body)
    res.send("Request received...");
});

export default app;