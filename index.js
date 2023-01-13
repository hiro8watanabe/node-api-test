const express = require("express");
const app = express();
const PORT = 5678;
app.use(express.json());

app.listen(PORT, () => console.log("サーバーが起動しました"));

