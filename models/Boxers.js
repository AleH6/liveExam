"use strict";
var mongoose = require("mongoose");
var BoxerSchema = new mongoose.Schema({
    name: String,
    age: Number,
    weight: Number
});
exports.Boxer = mongoose.model("Boxer", BoxerSchema);
