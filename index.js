import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("首頁 dev 123");
});

app.listen(3005, () => {});
