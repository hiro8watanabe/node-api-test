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

app.post("/api/customers", (req, res) => {
  const customer = {
    name: req.body.name,
    id: customers.length + 1,
  };
  customers.push(customer);
  res.send(customer);
});

//customer情報の更新
app.put("/api/customers/:id", (req, res) => {
  const customer = customers.find((c) => c.id === parseInt(req.params.id));
  customer.name = req.body.name;
  res.send(customer);
});

//customer情報の削除
app.delete("/api/customers/:id", (req, res) => {
  const customer = customers.find((c) => c.id === parseInt(req.params.id));

  const index = customers.indexOf(customer);
  customers.splice(index, 1);
  res.send(customer);
});
