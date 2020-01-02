// const express = require ("express")
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
const app = express();
import routes from "./src/routes/crmRoutes";
const PORT = 4000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

mongoose.connect("mongodb://moe:pw1234@ds159641.mlab.com:59641/crm", {
  useNewUrlParser: true
});
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("connected to database");
});

/////////////////////////////////////////
const mw = (req, res, next) => {
  console.log("logged");
  next();
};
app.use(mw);
////////////////////////////////////

app.use((req, res, next) => {
  if (
    req.headers &&
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "JWT"
  ) {
    jwt.verify(
      req.headers.authorization.split(" ")[1],
      "secret",
      (err, decode) => {
        if (err) req.user = undefined;
        else {
          req.user = decode;
          next();
        }
      }
    );
  } else{
    req.user = undefined
    next()
  }
});

routes(app);
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
