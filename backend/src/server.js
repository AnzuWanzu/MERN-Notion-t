import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5002;

connectDB();

//----Middleware---

//this allows us to use functions such as const { title, content } = req.body; or
//parse JSON bodies: req.body
app.use(express.json());
app.use(rateLimiter);

//Simple Middleware sample
// app.use((req, res, next) => {
//   console.log(`Req method is ${req.method} & Req url is ${req.url}`);
//   next();
// });

//--------

app.use("/api/notes", notesRoutes); //best to use when controllers have similar routes

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
