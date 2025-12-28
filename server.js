import express from "express";
import rateLimit from "express-rate-limit";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import multer from "multer";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const upload = multer({ storage: multer.memoryStorage() });

/* -------