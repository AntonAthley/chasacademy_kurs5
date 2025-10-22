const express = require("express");
const app = express();
const initDb = require("./initDb");

initDb();

app.get("/", (req, res) => {
  res.send("Hello world! Docker, Azure & CI/CD test");
});

const PORT =
  Number(process.env.WEBSITES_PORT) || Number(process.env.PORT) || 3000;
app.listen(PORT, () => console.log(`Server port: ${PORT}`));
