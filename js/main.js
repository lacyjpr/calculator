$(document).ready(function(){var formula=[],solution="";$(".btn-0").on("click",function(){"number"==typeof formula[0]&&1===formula.length&&(formula=[],solution=""),solution.length<11&&"0"!==solution&&"/"!==formula[formula.length-1]&&(formula.push("0"),solution+="0"),$(".problem").html(formula),$(".answer").html(solution)}),$(".btn-1").on("click",function(){"number"==typeof formula[0]&&1===formula.length&&(formula=[],solution=""),"0"===solution?(solution="1",formula.pop(),formula.push("1")):solution.length<11&&(formula.push("1"),solution+="1"),$(".problem").html(formula),$(".answer").html(solution)}),$(".btn-2").on("click",function(){"number"==typeof formula[0]&&1===formula.length&&(formula=[],solution=""),"0"===solution?(solution="2",formula.pop(),formula.push("2")):solution.length<11&&(formula.push("2"),solution+="2"),$(".problem").html(formula),$(".answer").html(solution)}),$(".btn-3").on("click",function(){"number"==typeof formula[0]&&1===formula.length&&(formula=[],solution=""),"0"===solution?(solution="3",formula.pop(),formula.push("3")):solution.length<11&&(formula.push("3"),solution+="3"),$(".problem").html(formula),$(".answer").html(solution)}),$(".btn-4").on("click",function(){"number"==typeof formula[0]&&1===formula.length&&(formula=[],solution=""),"0"===solution?(solution="4",formula.pop(),formula.push("4")):solution.length<11&&(formula.push("4"),solution+="4"),$(".problem").html(formula),$(".answer").html(solution)}),$(".btn-5").on("click",function(){"number"==typeof formula[0]&&1===formula.length&&(formula=[],solution=""),"0"===solution?(solution="5",formula.pop(),formula.push("5")):solution.length<11&&(formula.push("5"),solution+="5"),$(".problem").html(formula),$(".answer").html(solution)}),$(".btn-6").on("click",function(){"number"==typeof formula[0]&&1===formula.length&&(formula=[],solution=""),"0"===solution?(solution="6",formula.pop(),formula.push("6")):solution.length<11&&(formula.push("6"),solution+="6"),$(".problem").html(formula),$(".answer").html(solution)}),$(".btn-7").on("click",function(){"number"==typeof formula[0]&&1===formula.length&&(formula=[],solution=""),"0"===solution?(solution="7",formula.pop(),formula.push("7")):solution.length<11&&(formula.push("7"),solution+="7"),$(".problem").html(formula),$(".answer").html(solution)}),$(".btn-8").on("click",function(){"number"==typeof formula[0]&&1===formula.length&&(formula=[],solution=""),"0"===solution?(solution="8",formula.pop(),formula.push("8")):solution.length<11&&(formula.push("8"),solution+="8"),$(".problem").html(formula),$(".answer").html(solution)}),$(".btn-9").on("click",function(){"number"==typeof formula[0]&&1===formula.length&&(formula=[],solution=""),"0"===solution?(solution="9",formula.pop(),formula.push("9")):solution.length<11&&(formula.push("9"),solution+="9"),$(".problem").html(formula),$(".answer").html(solution)}),$(".decimal").on("click",function(){solution.length<11&&solution.indexOf(".")===-1&&(formula.push("."),solution+="."),$(".problem").html(formula),$(".answer").html(solution)}),$(".add").on("click",function(){"+"!==formula[formula.length-1]&&"-"!==formula[formula.length-1]&&"*"!==formula[formula.length-1]&&"/"!==formula[formula.length-1]&&formula.length>0&&(formula.push("+"),solution="",$(".problem").html(formula),$(".answer").html("+"))}),$(".subtract").on("click",function(){"+"!==formula[formula.length-1]&&"-"!==formula[formula.length-1]&&"*"!==formula[formula.length-1]&&"/"!==formula[formula.length-1]&&formula.length>0&&(formula.push("-"),solution="",$(".problem").html(formula),$(".answer").html("-"))}),$(".multiply").on("click",function(){"+"!==formula[formula.length-1]&&"-"!==formula[formula.length-1]&&"*"!==formula[formula.length-1]&&"/"!==formula[formula.length-1]&&formula.length>0&&(formula.push("*"),solution="",$(".problem").html(formula),$(".answer").html("*"))}),$(".divide").on("click",function(){"+"!==formula[formula.length-1]&&"-"!==formula[formula.length-1]&&"*"!==formula[formula.length-1]&&"/"!==formula[formula.length-1]&&formula.length>0&&(formula.push("/"),solution="",$(".problem").html(formula),$(".answer").html("/"))}),$(".equals").on("click",function(){var str=formula.join(""),finalSolution=eval(str);finalSolution=Math.round(1e5*finalSolution)/1e5,finalSolution>99999999999||finalSolution<-9999999999?$(".answer").html("Overflow!"):(formula=[finalSolution],solution=finalSolution.toString(),$(".answer").html(finalSolution))}),$(".allClear").on("click",function(){formula=[],solution="",$(".problem").html("0"),$(".answer").html("0")}),$(".clear").on("click",function(){formula.splice(-1,1),solution=solution.substring(0,solution.length-1),$(".problem").html(formula),$(".answer").html(solution),0===formula.length&&$(".problem").html("0"),0===solution.length&&$(".answer").html("0")})});