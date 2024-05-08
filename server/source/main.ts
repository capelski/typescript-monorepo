import express from "express";
import { resolve } from "path";
import { getId } from "shared";

const app = express();

app.use(express.static(resolve(__dirname, "..", "public")));

app.get("/get-id", (_req, res) => {
  res.send(getId());
});

app.listen(3000, () => {
  console.log("Server up & running");
});
