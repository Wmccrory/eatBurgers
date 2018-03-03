//sineater app//
//connection boilerplate to connect to mysql server

var mysql = require("mysql");

var connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "sineaterdb"
});

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.eng.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "",
		database: "sineaterdb"
	});
};



connection.connect(function(err) {
if (err) {
	console.error("error connecting: " + err.stack);
	return;
}

console.log("connected as id " + connection.threadId);
});

module.exports = connection;