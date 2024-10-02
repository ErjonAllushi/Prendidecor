const express = require("express");
const itemModel = require("../models/itemModel");
const { v4: uuidv4 } = require("uuid");
const multer = require("multer");
const path = require("path");

const app = express();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images");
  },
  filename: function (req, file, cb) {
    cb(null, uuidv4() + "-" + Date.now() + path.extname(file.originalname));
  },
});
const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
let upload = multer({ storage, fileFilter });

// CRUD
// create: post
app.post("/produkt", upload.single("image"), async (req, res) => {
  try {
    const newItem = new itemModel({ ...req.body, image: req.file.filename });
    newItem.save();
    console.log(newItem);
    res.status(200).send(newItem);
  } catch (err) {
    res.status(500).send("Not created: " + err);
  }
});
// read: get
app.get("/produkt", async (req, res) => {
  try {
    const allItems = await itemModel.find({});
    res.status(200).send(allItems);
  } catch (err) {
    res.status(500).send("Not read: " + err);
  }
});
// read: get
app.get("/produkt/:id", async (req, res) => {
  try {
    const itemID = req.params.id;
    const oneItem = await itemModel.findById({ _id: itemID });
    res.status(200).send(oneItem);
  } catch (err) {
    res.status(500).send("Not read: " + err);
  }
});
// Delete:  delete
app.delete("/delete/:id", async (req, res) => {
  try {
    const itemID = req.params.id;
    await itemModel.deleteOne({ _id: itemID });
    res.status(200).send("Delete");
  } catch (err) {
    res.status(500).send("Not deleted: " + err);
  }
});
// update:  put, patch
app.patch("/update/:id", upload.single("image"), async (req, res) => {
  try {
    const itemID = req.params.id;
    const infoUpdate = { ...req.body };
    if (req.file) {
      infoUpdate.image = req.file.filename;
    }
    const itemUpdated = await itemModel.findByIdAndUpdate(
      { _id: itemID },
      { $set: infoUpdate },
      { new: true }
    );
    res.status(200).send(itemUpdated);
  } catch (err) {
    res.status(500).send("Not updated: " + err);
  }
});

module.exports = app;
