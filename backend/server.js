const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");
const itemRoute = require("./routes/itemRoute");
const contactRoute = require("./routes/contactRoute");

const path = require("path");
const app = express();

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
    exposedHeaders: ["set-cookie"],
  })
);
app.use(
  session({
    secret: "This will be secret",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
  })
);
app.use(express.json({ limit: "1000mb", extended: true }));
app.use("/images", express.static(path.join(__dirname, "/images")));
mongoose
  .connect(
    "mongodb+srv://erionallushi:erion@cluster0.qlt6b.mongodb.net/MERN?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("DB start");
  })
  .catch(() => {
    console.log("Not started");
  });

app.use(itemRoute);
app.use(contactRoute);

app.listen(5000, () => {
  console.log("Server created!");
});
