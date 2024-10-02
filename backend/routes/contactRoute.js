const express = require("express");
const contactModel = require("../models/contactModel");
const app = express();

// create: post
app.post("/Contact", async (req, res) => {
  try {
    const newContact = new contactModel(req.body);
    newContact.save();
    console.log(newContact);
    res.status(200).send(newContact);
  } catch (err) {
    res.status(500).send("Not created: " + err);
  }
});
module.exports = app;
