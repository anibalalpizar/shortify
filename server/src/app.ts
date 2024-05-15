import express, { type Application } from "express";
import { PORT } from "./conf/config";
import morganMiddleware from "./middlewares/morganMiddleware";

const app: Application = express();

// settings
app.set("port", PORT);

// middlewares
app.use(morganMiddleware);

export default app;