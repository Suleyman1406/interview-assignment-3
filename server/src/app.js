const express = require("express");
const app = express();
const fs = require("fs");
const axios = require("axios").default;

/* Getting the current date and time and formatting it to the desired format. */
var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();

today = yyyy + "-" + mm + "-" + dd;
const url = `https://seffaflik.epias.com.tr/transparency/service/market/intra-day-trade-history?endDate=${today}&startDate=${today}`;

/* This is a middleware function that allows the server to respond to requests from other servers. */

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/intra-day-trade-history", async function (req, res) {
  const response = await axios.get(url);
  res.json(response.data);
});

app.listen("8080", () => {
  console.log(`Example app listening on port 8080`);
});
