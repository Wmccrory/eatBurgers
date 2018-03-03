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
			sin: data
		};

		res.render("absolution",openSin);
	});
});

router.get("/easements", function(req, res) {
	burger.eaten(function(data) {
		var devouredSin = {
			sin: data
		};

		console.log(devouredSin);
		res.render("easements",devouredSin);
	});
});

router.get("/confess", function(req, res) {
	res.render("confess");
})

router.post("/api/sins", function(req, res) {
	burger.insert(req.body.name, function(result) {
		res.json({ id: result.insertId });
	});
});

router.put("/api/sins/:id", function(req, res) {
	condition = req.params.id;
	console.log(condition);
	burger.devour(condition, function(result) {
		res.json({id: result.insertId})
	})
});

module.exports = router;