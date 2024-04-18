import express from "express";
import fs from "fs";
import { format } from "date-fns";

const app = express();
const PORT = 4000; //http://localhost:4000/

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome you all" });
});



app.get("/write", (req, res) => {
  let today = format(new Date(), "dd-MM-yyyy-HH-mm-ss");
  const filepath = `Timestamp/${today}.txt`;
  fs.writeFileSync(filepath, `${today}`, "utf-8");
  let data = fs.readFileSync(filepath, "utf-8");
  res.status(200).send(data);
});

app.get('/read', (req, res) => {
  let timestamp = [];
  fs.readdirSync('./Timestamp').forEach(file => {
      timestamp.push(file);
  });
  res.status(200).json({ timestamp });
});
app.listen(PORT, () => {
  console.log(`Server is running on port  ${PORT}`);
});
