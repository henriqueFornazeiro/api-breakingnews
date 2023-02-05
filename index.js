const express = require("express");
const app = express();
const port = 3000;

const userRouter = require("./src/routes/user.route");
app.use(express.json());

app.use("/user", userRouter);

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);
