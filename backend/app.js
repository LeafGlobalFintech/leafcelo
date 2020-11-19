require('dotenv').config()
const express = require("express");
const http = require("http");
const mongoose = require('mongoose');
global.AutoIncrement = require('mongoose-sequence')(mongoose);
const config = require('./config');
const api = require('./routes/api');
const bodyParser = require('body-parser');
const cors = require("cors");
const app = express();

mongoose.connect(config.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then((con) => {
  console.log(`mongo is connected.`)
})
  .catch(err => {
    console.log(`Can't connect mongo ${err.toString()}. `);
  })



// It is used to parse application/json data came in request body.
app.use(bodyParser.json({ limit: '200mb', extended: true }));

// Allow Cross origin request to this server
app.use(cors());

app.use("/api", api);

app.use("/", express.static("./web"));
app.get("/*", (req, res) => {
  res.sendFile(__dirname + "/web/index.html");
});

const server = http.createServer(app);
server.listen(config.PORT, () => {
  console.log("listening on port " + config.PORT)
});
