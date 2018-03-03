$(document).ready(function () {
	$(".titleSplash").fadeIn(2500);
});

$(function () {

	//Submitting new sin
	$(".createForm").on("submit", function(event) {
		event.preventDefault();

		if ($("#userEntry").val().trim().length === 0) {
			return
		}

		var newSin = {
			name: $("#userEntry").val().trim()
		}

		console.log(newSin);

		$.ajax("api/sins", {
			type: "POST",
			data: newSin
		}).then(function() {
			$(".modal").show(1000);
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
			$(".modal").show(1000);
		})
	})
});