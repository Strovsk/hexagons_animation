const express = require("express");
const path = require("node:path");

const app = express();

app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
  console.log("Access: http://localhost:3000");
  console.log("\nServing files from: " + __dirname);
});
