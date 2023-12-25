const express = require("express");

const { check } = require("express-validator");

const routes = express.Router();

const usersControllers = require("../controllers/users");

routes.post("/authenticate", check(), usersControllers.authUsers);
routes.post("/authenticate", check(), usersControllers.validateUsers);

module.exports = routes;
