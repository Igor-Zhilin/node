import express from "express";
const app = express();
const port = "3000";

app.get("/", function (req, res) {
  res.end("SHIIIIIIIIIIIIIIIIII");
});

app.listen(port, () => {
  console.log("listening on port", +port);
});
