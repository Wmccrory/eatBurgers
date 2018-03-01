//sineater app//
//using orm app to create sineater app specific functions//

var orm = require("../config/orm.js");

//orm.selectAll(table)	//insert table to retrieve list of sins
//orm.updateOne(table, column, value)	//insert table and column (sins) (sins) to add new sin (value)
//orm.updateOne(table, value)	//insert table(sins) with value(id) to eat sin

var sin = {
	all: function(cb) {
		orm.selectAll("sins", function(res) {
			console.log(res);
			cb(res);
		});
	},

	update: function(objColumn, objValue, cb) {
		orm.updateOne("sins", objColumn, objValue, function(res) {
			console.log(res);
			cb(res);
		})
	},

	devour: function(condition, cb) {
		orm.updateOne("sins", condition, function(res) {
			console.log(res);
		})
	}
}

sin.all()