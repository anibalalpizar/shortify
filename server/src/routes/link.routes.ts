import express from "express";
import { createLink, redirectShortLink } from "../controllers/link.controller";

const router = express.Router();

router.post("/shorten", createLink);

router.get("/:shortUrl", redirectShortLink);

export default router;
