//sineater app//
//app router//

var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
	console.log("Homepage");
	res.render("index");
})

router.get("/absolution", function(req, res) {
	burger.all(function(data) {
		var openSin = {
			sins: data
		};

		console.log(openSin);
		res.render("absolution");
	});
});

router.get("/easements", function(req, res) {
	burger.eaten(function(data) {
		var devouredSin = {
			sins: data
		};

		console.log(devouredSin);
		res.render("easements");
	});
});

router.get("/confess", function(req, res) {
	res.render("confess");
})

router.post("/api/sins", function(req, res) {
	burger.insert(
		req.body.userEntry, function(result) {
		// Send back the ID of the new quote
		res.json({ id: result.insertId });
	});
});

module.exports = router;