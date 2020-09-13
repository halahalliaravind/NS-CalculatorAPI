const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const calculatorRoutes = require("./routes/index");
const port = 3000;
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
// your code goes here

app.use(morgan("dev"));

// here
// Routes
app.use("/", calculatorRoutes);

// UI
app.set("View engine", "ejs");

app.get("/", (req, res) => {
  res.render(`../src/UI/ui.ejs`);
});

app.get("/", (__, res) => {
  res.status(200).send("Hello world!");
});

app.listen(port, () => console.log(`Server Running on port ${port}!`));

module.exports = app;
