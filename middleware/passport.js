const JwtStrategy = require("passport-jwt").Strategy;
const User = require("../models/user");
const logger = require("../logger/index");

require("dotenv").config();

const cookieExtractor = function