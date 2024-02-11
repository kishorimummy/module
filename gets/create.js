const global = require("./global.js");
const express = require("express");
const app = express();
const port = global.port;

console.log(global);

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
var data = {};

function endpoint(methood, url, filename) {
  if (methood == "get") {
    app.get(url, (req, res) => {
      res.render(filename);
      data = {};
    });
  } else if (methood == "post") {
    app.post(url, (req, res) => {
      res.render(filename);
      data = req.body;
      console.log(data);
    });
  }
}
const help = "create.endpoint('methood','/endpoint-name','file.ejs in views.'))"
module.exports = {
    help,
    example,
    endpoint,
};
