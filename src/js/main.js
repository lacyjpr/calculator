$(document).ready(function() {
	// Array to hold the formula
	var formula = [];
	// String to hold the current entry & solution
	var solution = "";

	$(".btn-0").on("click", function() {
		// Push the digit into formula if solution's length is less than 11
		// If solution already contains only a zero do nothing
		if (solution.length < 11 && solution !== "0") {
			formula.push("0");
			solution = solution + "0";
		}
		// display the formula
		$(".problem").html(formula);
		// display the current value
		$(".answer").html(solution);
	});

	$(".btn-1").on("click", function() {
		// Push the digit into formula if solution's length is less than 11
		if (solution.length < 11) {
			formula.push("1");
			solution = solution + "1";
		}

		$(".problem").html(formula);
		$(".answer").html(solution);
	});

	$(".btn-2").on("click", function() {
		if (solution.length < 11) {
			formula.push("2");
			solution = solution + "2";
		}

		$(".problem").html(formula);
		$(".answer").html(solution);
	});

	$(".btn-3").on("click", function() {
		if (solution.length < 11) {
			formula.push("3");
			solution = solution + "3";
		}

		$(".problem").html(formula);
		$(".answer").html(solution);
	});

	$(".btn-4").on("click", function() {
		if (solution.length < 11) {
			formula.push("4");
			solution = solution + "4";
		}

		$(".problem").html(formula);
		$(".answer").html(solution);
	});

	$(".btn-5").on("click", function() {
		if (solution.length < 11) {
			formula.push("5");
			solution = solution + "5";
		}

		$(".problem").html(formula);
		$(".answer").html(solution);
	});

	$(".btn-6").on("click", function() {
		if (solution.length < 11) {
			formula.push("6");
			solution = solution + "6";
		}

		$(".problem").html(formula);
		$(".answer").html(solution);
	});

	$(".btn-7").on("click", function() {
		if (solution.length < 11) {
			formula.push("7");
			solution = solution + "7";
		}

		$(".problem").html(formula);
		$(".answer").html(solution);
	});

	$(".btn-8").on("click", function() {
		if (solution.length < 11) {
			formula.push("8");
			solution = solution + "8";
		}

		$(".problem").html(formula);
		$(".answer").html(solution);
	});

	$(".btn-9").on("click", function() {
		if (solution.length < 11) {
			formula.push("9");
			solution = solution + "9";
		}

		$(".problem").html(formula);
		$(".answer").html(solution);
	});

	$(".decimal").on("click", function() {
		if (solution.length < 11) {
			formula.push(".");
			solution = solution + ".";
		}

		$(".problem").html(formula);
		$(".answer").html(solution);
	});

	$(".add").on("click", function() {
		formula.push("+");
		solution = "+";

		$(".problem").html(formula);
		$(".answer").html(solution);
	});

	$(".subtract").on("click", function() {
		formula.push("-");
		solution = "-";

		$(".problem").html(formula);
		$(".answer").html(solution);
	});

	$(".multiply").on("click", function() {
		formula.push("*");
		solution = "*";

		$(".problem").html(formula);
		$(".answer").html(solution);
	});		

	$(".divide").on("click", function() {
		formula.push("/");
		solution = "/";

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
		$(".answer").html(finalSolution);
	});

	$(".allClear").on("click", function() {
		formula = [];
		solution = "";
		
		console.log("allClear clicked");
		console.log(formula);
		console.log(solution);

		$(".problem").html("0");
		$(".answer").html("0");
	});

	$(".clear").on("click", function() {
		formula.splice(-1,1);
		solution = solution.slice(0, -1);

		console.log("clear clicked");
		console.log(formula);
		console.log(solution);

		if (formula.length === 0){
			$(".problem").html("0");
			$(".answer").html("0");
		} else {
			$(".problem").html(formula);
			$(".answer").html(solution);
		}
	});


});