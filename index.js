const express = require("express");
const app = express();
const PORT = 5678;
app.use(express.json());

app.listen(PORT, () => console.log("サーバーが起動しました"));

app.get("/", (req, res) => {
  res.send("send");
});

const customers = [
  { name: "田中", id: 1 },
  { name: "山田", id: 2 },
  { name: "武田", id: 3 },
  { name: "橋本", id: 4 },
  { name: "高橋", id: 5 },
];

app.get("/api/customers", (req, res) => {
  res.send(customers);
});

