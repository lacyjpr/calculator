$(document).ready(function() {
	// Array to hold the formula
	var formula = [];
	// String to hold the current entry & solution
	var solution = "";
	var click = new Audio("/calculator/media/click.mp3");

	// Handle button clicks
	$(".btn").on("click", function() {
		click.play();
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
			digit(val);
			break;
		case ".":
			decimal(val);
			break;
		case "+":
		case "-":
			operator(val);
			break;
		case "x":
			val = "*";
			operator(val);
			break;
		case "÷":
			val = "/";
			operator(val);
			break;
		case "=":
			equals();
			break;
		case "AC":
			allClear();
			break;
		case "C":
			clear();
			break;
		}
	});

	// Handle keyboard entry
	$(document).on("keypress", function(event) {
		var keyCode = (event.keyCode ? event.keyCode : event.which);
		var valu = "";
		switch (keyCode) {
		case 96:
		case 48: 
			click.play();
			valu = "0"; 
			zero(valu);
			break;
		case 97:
		case 49:
			click.play(); 
			valu = "1"; 
			digit(valu);
			break;
		case 98:
		case 50:
			click.play(); 
			valu = "2"; 
			digit(valu);
			break;
		case 99:
		case 51: 
			valu = "3"; 
			digit(valu);
			break;
		case 100:
		case 52:
			click.play(); 
			valu = "4"; 
			digit(valu);
			break;
		case 101:
		case 53:
			click.play(); 
			valu = "5"; 
			digit(valu);
			break;
		case 102:
		case 54: 
			click.play();
			valu = "6";
			digit(valu); 
			break;
		case 103:
		case 55: 
			click.play();
			valu = "7";
			digit(valu); 
			break;
		case 104:
		case 56: 
			click.play();
			valu = "8";
			digit(valu); 
			break;
		case 105:
		case 57:
			click.play(); 
			valu = "9"; 
			digit(valu);
			break;
		case 110:
		case 190:
			click.play(); 
			valu = ".";
			decimal(valu); 
			break;
		case 43:	
		case 107: 
			click.play();
			valu = "+"; 
			operator(valu);
			break;
		case 45:
		case 109: 
			click.play();
			valu = "-"; 
			operator(valu);
			break;
		case 47:
		case 111:
			click.play(); 
			valu = "/";
			operator(valu); 
			break;
		case 42:
		case 106: 
			click.play();
			valu = "*";
			operator(valu); 
			break;
		case 61:
		case 13:
			click.play(); 
			equals();
			break;
		case 46: 
			click.play();
			clear(); 
			break;
		default:
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
	}

	function decimal(val) {
		// Prevent multiple decimal points in an entry
		if (solution.length < 11 && solution.indexOf(".") === -1) {
			formula.push(val);
			solution = solution + val;
		}
		$(".problem").html(formula);
		$(".answer").html(solution);
	}

	function operator(val){
		// Prevent multiple operators in a row & at the start of a formula
		if (formula[formula.length -1] !== "+" && formula[formula.length -1] !== "-" && formula[formula.length -1] !== "*" && formula[formula.length -1] !== "/" && formula[formula.length -1] !== "." && formula.length > 0) {
			formula.push(val);
			// Empty solution so next digit entered doesn't also display the operator
			solution = "";
			$(".problem").html(formula);
			$(".answer").html(val);
		}
	}

	function equals() {
		// evaluate the formula
		var str = formula.join("");
		var finalSolution = eval(str);
		// Convert finalSolution to number
		finalSolution = parseFloat(finalSolution);
		// Round to 11 decimal places
		finalSolution = Math.round(100000000000 * finalSolution) / 100000000000;
		// Prevent scientific notation + remove trailing zeros credit: http://stackoverflow.com/questions/1015402/chop-unused-decimals-with-javascript
		finalSolution = finalSolution.toFixed(11).replace(/(\.[0-9]*?)0+$/, "$1");
		// Remove trailing decimal points credit: credit: http://stackoverflow.com/questions/1015402/chop-unused-decimals-with-javascript
		finalSolution = finalSolution.replace(/\.$/, "");
		// Prevent answers too long for display
		if (finalSolution > 99999999999 || finalSolution < -9999999999){
			$(".answer").html("Overflow!");
		} else {
			// Save finalSolution as a number so zero & digit functions work 
			var finalSolution2 = parseFloat(finalSolution);
			// Keep the final solution in formula
			formula = [finalSolution2];
			solution = finalSolution.toString();
			// Display the final solution
			$(".answer").html(finalSolution);
		}
	}

	function allClear() {
		formula = [];
		solution = "";

		$(".problem").html("0");
		$(".answer").html("0");
	}

	function clear() {
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
	}

});