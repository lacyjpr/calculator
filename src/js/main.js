// Credit http://codepen.io/mokada42991/pen/ZLRgOE?editors=0010 for inspiration

$(document).ready(function() {
	// Array to hold the formula
	var formula = [];
	// String to hold the current entry & solution
	var solution = "";

	$(".btn-0").on("click", function() {
		// Push the digit into formula if solution's length is less than 11
		// If solution already contains only a zero do nothing
		// Prevent divide by zero
		if (solution.length < 11 && solution !== "0" && formula[formula.length -1] !== "/") {
			formula.push("0");
			solution = solution + "0";
		}
		// display the formula
		$(".problem").html(formula);
		// display the current value
		$(".answer").html(solution);
	});

	$(".btn-1").on("click", function() {
		// Prevent multiple zeros at the beginning of a number
		if (solution === "0"){
			solution = "1";
			formula.pop();
			formula.push("1");
		}
		// Push the digit into formula if solution's length is less than 11
		else if (solution.length < 11) {
			formula.push("1");
			solution = solution + "1";
		}
		$(".problem").html(formula);
		$(".answer").html(solution);
	});

	$(".btn-2").on("click", function() {
		if (solution === "0"){
			solution = "2";
			formula.pop();
			formula.push("2");
		} else if (solution.length < 11) {
			formula.push("2");
			solution = solution + "2";
		}
		$(".problem").html(formula);
		$(".answer").html(solution);
	});

	$(".btn-3").on("click", function() {
		if (solution === "0"){
			solution = "3";
			formula.pop();
			formula.push("3");
		} else if (solution.length < 11) {
			formula.push("3");
			solution = solution + "3";
		}
		$(".problem").html(formula);
		$(".answer").html(solution);
	});

	$(".btn-4").on("click", function() {
		if (solution === "0"){
			solution = "4";
			formula.pop();
			formula.push("4");
		} else if (solution.length < 11) {
			formula.push("4");
			solution = solution + "4";
		}
		$(".problem").html(formula);
		$(".answer").html(solution);
	});

	$(".btn-5").on("click", function() {
		if (solution === "0"){
			solution = "5";
			formula.pop();
			formula.push("5");
		} else if (solution.length < 11) {
			formula.push("5");
			solution = solution + "5";
		}
		$(".problem").html(formula);
		$(".answer").html(solution);
	});

	$(".btn-6").on("click", function() {
		if (solution === "0"){
			solution = "6";
			formula.pop();
			formula.push("6");
		} else if (solution.length < 11) {
			formula.push("6");
			solution = solution + "6";
		}
		$(".problem").html(formula);
		$(".answer").html(solution);
	});
	$(".btn-7").on("click", function() {
		if (solution === "0"){
			solution = "7";
			formula.pop();
			formula.push("7");
		} else if (solution.length < 11) {
			formula.push("7");
			solution = solution + "7";
		}
		$(".problem").html(formula);
		$(".answer").html(solution);
	});

	$(".btn-8").on("click", function() {
		if (solution === "0"){
			solution = "8";
			formula.pop();
			formula.push("8");
		} else if (solution.length < 11) {
			formula.push("8");
			solution = solution + "8";
		}
		$(".problem").html(formula);
		$(".answer").html(solution);
	});

	$(".btn-9").on("click", function() {
		if (solution === "0"){
			solution = "9";
			formula.pop();
			formula.push("9");
		} else if (solution.length < 11) {
			formula.push("9");
			solution = solution + "9";
		}
		$(".problem").html(formula);
		$(".answer").html(solution);
	});

	$(".decimal").on("click", function() {
		// Prevent multiple decimal points in an entry
		if (solution.length < 11 && solution.indexOf(".") === -1) {
			formula.push(".");
			solution = solution + ".";
		}
		$(".problem").html(formula);
		$(".answer").html(solution);
	});

	$(".add").on("click", function() {
		// Prevent multiple operators in a row & at the start of a formula
		if (formula[formula.length -1] !== "+" && formula[formula.length -1] !== "-" && formula[formula.length -1] !== "*" && formula[formula.length -1] !== "/" && formula.length > 0) {
			formula.push("+");
			// Empty solution so next digit entered doesn't also display the operator
			solution = "";
			$(".problem").html(formula);
			$(".answer").html("+");
		}
	});

	$(".subtract").on("click", function() {
		if (formula[formula.length -1] !== "+" && formula[formula.length -1] !== "-" && formula[formula.length -1] !== "*" && formula[formula.length -1] !== "/" && formula.length > 0) {
			formula.push("-");
			solution = "";
			$(".problem").html(formula);
			$(".answer").html("-");
		}
	});

	$(".multiply").on("click", function() {
		if (formula[formula.length -1] !== "+" && formula[formula.length -1] !== "-" && formula[formula.length -1] !== "*" && formula[formula.length -1] !== "/" && formula.length > 0) {
			formula.push("*");
			solution = "";
			$(".problem").html(formula);
			$(".answer").html("*");
		}
	});		

	$(".divide").on("click", function() {
		if (formula[formula.length -1] !== "+" && formula[formula.length -1] !== "-" && formula[formula.length -1] !== "*" && formula[formula.length -1] !== "/" && formula.length > 0) {
			formula.push("/");
			solution = "";
			$(".problem").html(formula);
			$(".answer").html("/");
		}
	});

	$(".equals").on("click", function() {
		// evaluate the formula
		var str = formula.join("");
		var finalSolution = eval(str);
		// round to 5 decimal places
		finalSolution = Math.round(100000 * finalSolution) / 100000;
		if (finalSolution > 99999999999 || finalSolution < -9999999999){
			$(".answer").html("Overflow!");
		} else {
			// Keep the final solution in formula
			formula = [finalSolution];
			// Display the final solution
			$(".answer").html(finalSolution);
		}
	});

	$(".allClear").on("click", function() {
		formula = [];
		solution = "";

		$(".problem").html("0");
		$(".answer").html("0");
	});

	$(".clear").on("click", function() {
		formula.splice(-1,1);
		solution = solution.slice(0, -1);

		if (formula.length === 0){
			$(".problem").html("0");
			$(".answer").html("0");
		} else {
			$(".problem").html(formula);
			$(".answer").html(solution);
		}
	});


});