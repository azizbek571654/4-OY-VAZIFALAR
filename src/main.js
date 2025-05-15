import express from "express";
import { config } from "dotenv";
import guhlarRouter from "./router/guruhlar.route.js";
config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use("/group", guhlarRouter);

app.listen(PORT, () => console.log("Server running on port", PORT));
