import express from "express";

const app = express();
const PORT = 5001;

app.get("/api/notes", (req, res) => {
  res.send("You got 5 notes");
});

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
