"use strict";
var express = require("express");
var Boxers_1 = require("../models/Boxers");
var router = express.Router();
router.get('/boxer', function (req, res, next) {
    Boxers_1.Boxer.find()
        .then(function (result) {
        res.json(result);
    }).catch(function (e) {
        console.log(e);
    });
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
