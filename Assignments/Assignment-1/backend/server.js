const express = require("express");
const app = express();

app.use(express.json()); // parse JSON

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.post("/users", (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: "Name is required" });
  res.json({ message: `User ${name} created successfully!` });
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Server running on port 3000");
});
