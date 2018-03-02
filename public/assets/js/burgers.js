$(document).ready(function () {
	$(".titleSplash").fadeIn(2500);
});

$(function () {
	$(".createForm").on("submit", function(event) {
		event.preventDefault();

		var newSin = $("#userEntry").val().trim()

		console.log(newSin);

		$.ajax("api/sins", {
			type: "POST",
			data: newSin
		}).then(function() {
			console.log("created new sin");
		})
	});
});