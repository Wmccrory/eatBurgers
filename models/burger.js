//sineater app//
//using orm app to create sineater app specific functions//

var orm = require("../config/orm.js");

//orm.selectAll(table)	//insert table to retrieve list of sins
//orm.insertOne(table, column, value)	//insert table and column (sins) (sins) to add new sin (value)
//orm.updateOne(table, value)	//insert table(sins) with value(id) to eat sin

var sin = {
	all: function(cb) {
		orm.selectAll("sins", 0, function(res) {
			cb(res);
		});
	},

	eaten: function(cb) {
		orm.selectAll("sins", 1, function(res) {
			cb(res);
		});
	},

	insert: function(objValue, cb) {
		orm.insertOne("sins", "sins", objValue, function(res) {
			cb(res);
		});
	},

	devour: function(condition, cb) {
		orm.updateOne("sins", condition, function(res) {
			cb(res)
		});
	}
};

module.exports = sin;