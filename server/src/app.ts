import cors from "cors";
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
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);


// routes
app.use(linkRoute);

export default app;
