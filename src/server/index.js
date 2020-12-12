const dotenv = require("dotenv");
dotenv.config();
const CloudAPI = process.env.API_ID+"&of=json&lang=en&url=";
const meaningUrl= "https://api.meaningcloud.com/sentiment-2.1?key=";

var path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fetch = require("node-fetch");


const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("dist"));

//get the root to sent the html page
app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

const CloudUrl = async (url) => {
  url+= "&model=general"
  const FUllUrl = meaningUrl + CloudAPI + url;
  const res = await fetch(FUllUrl);
  try {
    const MData = await res.json();
    return MData;
  } catch (err) {
    console.log("Error: " + err);
  }
};
app.post("/text", (req, res) => {
  const MCdata =  CloudUrl(req.body.input).then (function (rese){
    res.json(rese);
  });

});

const port = 3000
app.listen(3000, function (){
  console.log("The server is running on port " + port);
});
