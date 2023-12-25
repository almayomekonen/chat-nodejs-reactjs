const express = require("express");

const routes = express.Router();

const usersControllers = require("../controllers/users");

routes.post("/authenticate", usersControllers.authUsers);

module.exports = routes;
