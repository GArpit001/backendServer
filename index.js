import mongoose from "mongoose";
import express from "express";
import { datas } from "./model/mong.js";
import bodyParser from "body-parser";
import cors from "cors";
import md5 from "md5";

const saltRounds = 10;

try {
  console.log("Data Base Connected Successully");
  let URI =
    "mongodb+srv://arpitvermaetw:xT3JaNpWGSabOHPC@innerdata2.v6pwutf.mongodb.net/innerdata2";

  mongoose.connect(URI);
} catch (error) {
  console.log("Not Connect", error.message);
}

const app = express();

app.use(cors());
app.use(bodyParser.json());

let port = 1200;

app.get("/", (req, res) => {
  res.send("Hello World! 123");
});

app.post("/", (req, res) => {
  // console.log(req.body.Name)
  // res.send("Hello Post Request")

  // bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
  //   const innerdata = new datas({
  //     userName: req.body.Name,
  //     name: req.body.Name,
  //     email: req.body.email,
  //     password: hash,
  //   });

  //   innerdata.save();
  // });

  // const innerdata = new datas({
  //   userName: req.body.Name,
  //   name: req.body.Name,
  //   email: req.body.email,
  //   password: req.body.password,
  // });

  // innerdata.save();

  const innerdata = new datas({
    userName: req.body.Name,
    name: req.body.Name,
    email: req.body.email,
    password: md5(req.body.password),
  });

  innerdata.save();
});

// this way to send data for mongo to frontend  //

app.get("/demo", async (req, res) => {
  // const {email , password} = req.body

  let docs = await datas.find({});
  res.json(docs);
});

app.listen(port, () => {
  console.log(`Server has been started for port no. ${port}`);
});
