// Credit http://codepen.io/mokada42991/pen/ZLRgOE?editors=0010 for inspiration

$(document).ready(function() {
	// Array to hold the formula
	var formula = [];
	// String to hold the current entry & solution
	var solution = "";

	// Handle button clicks
	$(".btn").on("click", function(event) {
		var val = ($(this).text());
		switch (val) {
		case "0":
			zero(val);
			break;
		case "1":
		case "2":
		case "3":
		case "4":
		case "5":
		case "6":
		case "7":
		case "8":
		case "9":
			num(val);
			break;


		}
	});

	function zero(val) {
		// If formula already holds a value from a previous calculation and a number is clicked, clear formula
		if (typeof formula[0] === "number" && formula.length === 1) {
			formula = [];
			solution = "";
		}
		// Push the digit into formula if solution's length is less than 11
		// If solution already contains only a zero do nothing
		// Prevent divide by zero
		if (solution.length < 11 && solution !== "0" && formula[formula.length -1] !== "/") {
			formula.push(val);
			solution = solution + val;
		}
		// display the formula
		$(".problem").html(formula);
		// display the current value
		$(".answer").html(solution);
	}

	function digit(val) {
		if (typeof formula[0] === "number" && formula.length === 1) {
			formula = [];
			solution = "";
		}
		// Prevent multiple zeros at the beginning of a number
		if (solution === "0"){
			solution = val;
			formula.pop();
			formula.push(val);
		}
		// Push the digit into formula if solution's length is less than 11
		else if (solution.length < 11) {
			formula.push(val);
			solution = solution + val;
		}
		$(".problem").html(formula);
		$(".answer").html(solution);
	};

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
		if (formula[formula.length -1] !== "+" && formula[formula.length -1] !== "-" && formula[formula.length -1] !== "*" && formula[formula.length -1] !== "/" && formula[formula.length -1] !== "." && formula.length > 0) {
			formula.push("+");
			// Empty solution so next digit entered doesn't also display the operator
			solution = "";
			$(".problem").html(formula);
			$(".answer").html("+");
		}
	});

	$(".subtract").on("click", function() {
		if (formula[formula.length -1] !== "+" && formula[formula.length -1] !== "-" && formula[formula.length -1] !== "*" && formula[formula.length -1] !== "/" && formula[formula.length -1] !== "." && formula.length > 0) {
			formula.push("-");
			solution = "";
			$(".problem").html(formula);
			$(".answer").html("-");
		}
	});

	$(".multiply").on("click", function() {
		if (formula[formula.length -1] !== "+" && formula[formula.length -1] !== "-" && formula[formula.length -1] !== "*" && formula[formula.length -1] !== "/" && formula[formula.length -1] !== "." && formula.length > 0) {
			formula.push("*");
			solution = "";
			$(".problem").html(formula);
			$(".answer").html("*");
		}
	});		

	$(".divide").on("click", function() {
		if (formula[formula.length -1] !== "+" && formula[formula.length -1] !== "-" && formula[formula.length -1] !== "*" && formula[formula.length -1] !== "/" && formula[formula.length -1] !== "." && formula.length > 0) {
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
		// Convert finalSolution to number
		finalSolution = parseFloat(finalSolution);
		// Round to 11 decimal places
		finalSolution = Math.round(100000000000 * finalSolution) / 100000000000;
		// Prevent scientific notation + remove trailing zeros credit: http://stackoverflow.com/questions/1015402/chop-unused-decimals-with-javascript
		finalSolution = finalSolution.toFixed(11).replace(/(\.[0-9]*?)0+$/, "$1");
		if (finalSolution > 99999999999 || finalSolution < -9999999999){
			$(".answer").html("Overflow!");
		} else {
			// Keep the final solution in formula
			formula = [finalSolution];
			solution = finalSolution.toString();
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
		solution = solution.substring(0, solution.length -1);
		$(".problem").html(formula);
		$(".answer").html(solution);
		if (formula.length === 0) {
			$(".problem").html("0");
		}
		if (solution.length === 0) {
			$(".answer").html("0");
		}
	});

});