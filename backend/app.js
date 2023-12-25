const express = require("express");

const mongoose = require("mongoose");

const app = express();

const bodyParser = require("body-parser");

const cors = require("cors");

app.use(bodyParser.json());

app.use(cors({ origin: true }));

const usersRoutes = require("./routes/users");

app.use("/api/users", usersRoutes);

mongoose
  .connect(
    "mongodb+srv://almayo:7Io7qZCy4UCs4jpj@cluster0.26zhx4l.mongodb.net/user-chat"
  )
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));
