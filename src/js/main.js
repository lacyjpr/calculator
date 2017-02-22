$(document).ready(function() {
	// Array to hold the formula
	var formula = [];
	// String to hold the current entry & solution
	var solution = "";

	$(".1").on("click", function() {
		formula.push("1");
		solution = solution + 1;

		// display the formula
		$(".problem").html(formula);
		// display the current value
		$(".answer").html(solution);
	});

	$(".2").on("click", function() {
		formula.push("2");
		solution = solution + 2;

		// display the formula
		$(".problem").html(formula);
		// display the current value
		$(".answer").html(solution);
	});

	$(".3").on("click", function() {
		formula.push("3");
		solution = solution + 3;

		// display the formula
		$(".problem").html(formula);
		// display the current value
		$(".answer").html(solution);
	});

	$(".4").on("click", function() {
		formula.push("4");
		solution = solution + 4;

		// display the formula
		$(".problem").html(formula);
		// display the current value
		$(".answer").html(solution);
	});

	$(".5").on("click", function() {
		formula.push("5");
		solution = solution + 5;

		// display the formula
		$(".problem").html(formula);
		// display the current value
		$(".answer").html(solution);
	});

	$(".6").on("click", function() {
		formula.push("6");
		solution = solution + 6;

		// display the formula
		$(".problem").html(formula);
		// display the current value
		$(".answer").html(solution);
	});

	$(".7").on("click", function() {
		formula.push("7");
		solution = solution + 7;

		// display the formula
		$(".problem").html(formula);
		// display the current value
		$(".answer").html(solution);
	});

	$(".8").on("click", function() {
		formula.push("8");
		solution = solution + 8;

		// display the formula
		$(".problem").html(formula);
		// display the current value
		$(".answer").html(solution);
	});

	$(".9").on("click", function() {
		formula.push("9");
		solution = solution + 9;

		// display the formula
		$(".problem").html(formula);
		// display the current value
		$(".answer").html(solution);
	});

	$(".0").on("click", function() {
		formula.push("0");
		solution = solution + 0;

		// display the formula
		$(".problem").html(formula);
		// display the current value
		$(".answer").html(solution);
	});
});