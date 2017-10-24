const express     = require("express");
const bodyParser  = require("body-parser");
const goods       = require("./routes/goods.js");
const chalk       = require("chalk");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static("public"));
app.use("/api/goods", goods);

app.use((req, res, next) => {
    res.status(404);
    res.send('404 file not found!');
});


app.use((err, req, res, next) => {
    console.log(err);
    res.status(500);
    res.send('500 internal server error');
    res.send(err);
});

const server = app.listen(PORT, () => {
  const host = "http://localhost:" + PORT;
  console.log("Starting server on: " + chalk.white.bold(host));
});
