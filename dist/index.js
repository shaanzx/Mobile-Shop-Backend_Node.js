"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// 01. Initialize the express app
const app = (0, express_1.default)();
// 02. Define the application port
const port = 3000;
// 03. Define simple http request
app.get("/", (req, res) => {
    res.send("Request received");
});
//. 04. Instructs the express app to listen on port 3000
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
