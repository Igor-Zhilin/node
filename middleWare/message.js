// module.exports = function(req, res, next) {
    
// res.messages=();

// res.error=(msg)=>{

// return res.messages(msg)

// };
//     next();
//     };

// const User = require("../models/user")
const express = require('express');

function message(req) {
    return (msg, type) => {
        type = type || "info";
        let sess = req.session;
        sess.messages = sess.messages || [];
        sess.messages.push({type: type, string: msg});
    };
}

module.exports = function (req, res, next) {
    res.messages = message(req);
    res.error = (msg) => {
        return res.messages(msg, "error");
    };
    res.locals.messages = req.session.messages || [];
    res.locals.removeMessages = function () {
        req.session.messages = [];
    };
    next();
}
