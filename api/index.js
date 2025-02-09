const express = require("express");
const app = express();
const PORT = 4000;

app.get("/home", (req, res) => {
  res.status(200).json("Welcome, your app is working well");
});
app.get("/home", (req, res) => {
  res.status(200).json("Welcome to the app main page");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

module.exports = app;
