import express, { type Application } from "express";
import { PORT } from "./conf/config";
import morganMiddleware from "./middlewares/morganMiddleware";
import linkRoute from "./routes/link.routes";

const app: Application = express();

// settings
app.set("port", PORT);

// middlewares
app.use(morganMiddleware);
app.use(express.json());

// routes
app.use(linkRoute);

export default app;
