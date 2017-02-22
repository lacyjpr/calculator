$(document).ready(function() {
	// Array to hold the formula
	var formula = [];
	// String to hold the current entry & solution
	var solution = "";

	$(".0").on("click", function() {
		formula.push("0");
		solution = solution + "0";

		// display the formula
		$(".problem").html(formula);
		// display the current value
		$(".answer").html(solution);
	});

	$(".1").on("click", function() {
		formula.push("1");
		solution = solution + "1";

		$(".problem").html(formula);
		$(".answer").html(solution);
	});

	$(".2").on("click", function() {
		formula.push("2");
		solution = solution + "2";

		$(".problem").html(formula);
		$(".answer").html(solution);
	});

	$(".3").on("click", function() {
		formula.push("3");
		solution = solution + "3";

		$(".problem").html(formula);
		$(".answer").html(solution);
	});

	$(".4").on("click", function() {
		formula.push("4");
		solution = solution + "4";

		$(".problem").html(formula);
		$(".answer").html(solution);
	});

	$(".5").on("click", function() {
		formula.push("5");
		solution = solution + "5";

		$(".problem").html(formula);
		$(".answer").html(solution);
	});

	$(".6").on("click", function() {
		formula.push("6");
		solution = solution + "6";

		$(".problem").html(formula);
		$(".answer").html(solution);
	});

	$(".7").on("click", function() {
		formula.push("7");
		solution = solution + "7";

		$(".problem").html(formula);
		$(".answer").html(solution);
	});

	$(".8").on("click", function() {
		formula.push("8");
		solution = solution + "8";

		$(".problem").html(formula);
		$(".answer").html(solution);
	});

	$(".9").on("click", function() {
		formula.push("9");
		solution = solution + "9";

		$(".problem").html(formula);
		$(".answer").html(solution);
	});

	$(".decimal").on("click", function() {
		formula.push(".");
		solution = solution + ".";

		$(".problem").html(formula);
		$(".answer").html(solution);
	});

	$(".add").on("click", function() {
		formula.push("+");
		solution = solution + "+";

		$(".problem").html(formula);
		$(".answer").html(solution);
	});

	$(".subtract").on("click", function() {
		formula.push("-");
		solution = solution + "-";

		$(".problem").html(formula);
		$(".answer").html(solution);
	});

	$(".multiply").on("click", function() {
		formula.push("*");
		solution = solution + "*";

		$(".problem").html(formula);
		$(".answer").html(solution);
	});		

	$(".divide").on("click", function() {
		formula.push("/");
		solution = solution + "/";

		$(".problem").html(formula);
		$(".answer").html(solution);
	});

	$(".equals").on("click", function() {
		// evaluate the formula
		var str = formula.join("");
		var finalSolution = eval(str);

		// Keep the final solution in formula
		formula = [finalSolution];
		// Display the final solution
		$(".answer").html(finalSolution)

	$(".allClear").on("click", function() {
		formula = [];
		solution = "";

		$(".problem").html(0);
		$(".answer").html(0);
	});

	$(".clear").on("click", function() {
		formula.splice(-1,1);
		solution = solution.slice(0, -1);

		$(".problem").html(formula);
		$(".answer").html(solution);
	});

	});

});