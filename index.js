let express = require("express");

const app = express();
const port = 9000;

app.use("/api/v1/app", require("./src/api/api.v1"));

app.use("/", (req, res) => {
  res.json({ message: "Hello From Express App4" });
});

app.listen(9000, () => {
  console.log(`Starting Server on Port ${port}`);
});

require("./src/services/web3ContractServices")//web3 contract Listeners