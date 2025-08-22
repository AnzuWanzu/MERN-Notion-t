import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5002;

//----Middleware---

//this allows us to use functions such as const { title, content } = req.body; or
//parse JSON bodies: req.body
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());
app.use(rateLimiter);

//Simple Middleware sample
// app.use((req, res, next) => {
//   console.log(`Req method is ${req.method} & Req url is ${req.url}`);
//   next();
// });

//--------

app.use("/api/notes", notesRoutes); //best to use when controllers have similar routes

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
  });
});
