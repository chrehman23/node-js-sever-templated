let express = require("express");
let path = require("path");
let cors = require('cors');

const app = express();
const port = 9000;

app.use(cors({ credentials: true }));
app.use(express.json({ limit: "500mb", type: "application/json" }));
app.use(express.urlencoded({ limit: "500mb", extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/v1/app", require("./src/api/api.v1"));

app.use("/", (req, res) => {
  res.json({ message: "Hello From Express App4" });
});

app.listen(9000, () => {
  console.log(`Starting Server on Port ${port}`);
});

require("./src/services/web3ContractServices")//web3 contract Listeners