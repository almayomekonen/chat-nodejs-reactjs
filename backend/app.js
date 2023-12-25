const express = require("express");

const app = express();

const bodyParser = require("body-parser");

const cors = require("cors");

app.use(bodyParser.json());

app.use(cors({ origin: true }));

const usersRoutes = require("./routes/users");

app.use("/api/users", usersRoutes);

app.listen(3000);
