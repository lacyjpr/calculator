$(document).ready(function(){function zero(o){"number"==typeof formula[0]&&1===formula.length&&(formula=[],solution=""),solution.length<11&&"0"!==solution&&"/"!==formula[formula.length-1]&&(formula.push(o),solution+=o),$(".problem").html(formula),$(".answer").html(solution)}function digit(o){"number"==typeof formula[0]&&1===formula.length&&(formula=[],solution=""),"0"===solution?(solution=o,formula.pop(),formula.push(o)):solution.length<11&&(formula.push(o),solution+=o),$(".problem").html(formula),$(".answer").html(solution)}function decimal(o){solution.length<11&&solution.indexOf(".")===-1&&(formula.push(o),solution+=o),$(".problem").html(formula),$(".answer").html(solution)}function operator(o){"+"!==formula[formula.length-1]&&"-"!==formula[formula.length-1]&&"*"!==formula[formula.length-1]&&"/"!==formula[formula.length-1]&&"."!==formula[formula.length-1]&&formula.length>0&&(formula.push(o),solution="",$(".problem").html(formula),$(".answer").html(o))}function equals(){var str=formula.join(""),finalSolution=eval(str);finalSolution=parseFloat(finalSolution),finalSolution=Math.round(1e11*finalSolution)/1e11,finalSolution=finalSolution.toFixed(11).replace(/(\.[0-9]*?)0+$/,"$1"),finalSolution=finalSolution.replace(/\.$/,""),finalSolution>99999999999||finalSolution<-9999999999?$(".answer").html("Overflow!"):(formula=[finalSolution],solution=finalSolution.toString(),$(".answer").html(finalSolution))}function allClear(){formula=[],solution="",$(".problem").html("0"),$(".answer").html("0")}function clear(){formula.splice(-1,1),solution=solution.substring(0,solution.length-1),$(".problem").html(formula),$(".answer").html(solution),0===formula.length&&$(".problem").html("0"),0===solution.length&&$(".answer").html("0")}var formula=[],solution="";$(".btn").on("click",function(){new Audio("/media/click1.mp3").play();var o=$(this).text();switch(o){case"0":zero(o);break;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":digit(o);break;case".":decimal(o);break;case"+":case"-":operator(o);break;case"x":o="*",operator(o);break;case"÷":o="/",operator(o);break;case"=":equals();break;case"AC":allClear();break;case"C":clear()}})});