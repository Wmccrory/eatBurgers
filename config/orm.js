//sineater app//
//orm app creating boilerplate mysql functions//

var connection = require("./connection.js");

var orm = {
	selectAll : function(table, cb) {
		var queryString = "SELECT * FROM (??)";

		connection.query(queryString, [table], function (err, result) {
			if (err) throw err;
			cb(result);
		})
	},

	insertOne : function(table, column, value, cb) {
		var sql = "INSERT INTO ?? (??) VALUES (?)";

		connection.query(sql, [table, column, value], function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},

	updateOne : function(table, value, cb) {
		var sql = "UPDATE (??) SET devoured=1 WHERE id=(?)";

		connection.query(sql, [table, value], function (err, result) {
			if (err) throw err;
			cb(result);
		});
	}
}

module.exports = orm;