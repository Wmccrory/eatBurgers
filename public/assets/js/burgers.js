$(document).ready(function () {
	$(".titleSplash").fadeIn(2500);
});

$(function () {

	//Submitting new sin
	$(".createForm").on("submit", function(event) {
		event.preventDefault();

		var newSin = {
			name: $("#userEntry").val().trim()
		}

		console.log(newSin);

		$.ajax("api/sins", {
			type: "POST",
			data: newSin
		}).then(function() {
			console.log("created new sin");
		})
	});

	//Eating a sin
	$(".sinEat").on("click", function(event) {
		var id = $(this).data("id");
		var data = $(this).data("eat");

		var newDevourState = {
			id: id,
		}

		console.log(id);
		console.log(newDevourState);

		$.ajax("api/sins/" + id, {
			type: "PUT",
			data: newDevourState
		}).then(function() {
			console.log("Eaten sin");
		})
	})
});