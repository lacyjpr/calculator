$(document).ready(function(){var formula=[],solution="";$(".btn-0").on("click",function(){solution.length<11&&"0"!==solution&&(formula.push("0"),solution+="0"),$(".problem").html(formula),$(".answer").html(solution)}),$(".btn-1").on("click",function(){solution.length<11&&(formula.push("1"),solution+="1"),$(".problem").html(formula),$(".answer").html(solution)}),$(".btn-2").on("click",function(){solution.length<11&&(formula.push("2"),solution+="2"),$(".problem").html(formula),$(".answer").html(solution)}),$(".btn-3").on("click",function(){solution.length<11&&(formula.push("3"),solution+="3"),$(".problem").html(formula),$(".answer").html(solution)}),$(".btn-4").on("click",function(){solution.length<11&&(formula.push("4"),solution+="4"),$(".problem").html(formula),$(".answer").html(solution)}),$(".btn-5").on("click",function(){solution.length<11&&(formula.push("5"),solution+="5"),$(".problem").html(formula),$(".answer").html(solution)}),$(".btn-6").on("click",function(){solution.length<11&&(formula.push("6"),solution+="6"),$(".problem").html(formula),$(".answer").html(solution)}),$(".btn-7").on("click",function(){solution.length<11&&(formula.push("7"),solution+="7"),$(".problem").html(formula),$(".answer").html(solution)}),$(".btn-8").on("click",function(){solution.length<11&&(formula.push("8"),solution+="8"),$(".problem").html(formula),$(".answer").html(solution)}),$(".btn-9").on("click",function(){solution.length<11&&(formula.push("9"),solution+="9"),$(".problem").html(formula),$(".answer").html(solution)}),$(".decimal").on("click",function(){solution.length<11&&solution.hasOwnProperty(".")===!1&&(formula.push("."),solution+="."),$(".problem").html(formula),$(".answer").html(solution)}),$(".add").on("click",function(){"+"!==formula[formula.length-1]&&"-"!==formula[formula.length-1]&&"*"!==formula[formula.length-1]&&"/"!==formula[formula.length-1]&&formula.length>0&&(formula.push("+"),solution="+",$(".problem").html(formula),$(".answer").html(solution))}),$(".subtract").on("click",function(){"+"!==formula[formula.length-1]&&"-"!==formula[formula.length-1]&&"*"!==formula[formula.length-1]&&"/"!==formula[formula.length-1]&&formula.length>0&&(formula.push("-"),solution="-",$(".problem").html(formula),$(".answer").html(solution))}),$(".multiply").on("click",function(){"+"!==formula[formula.length-1]&&"-"!==formula[formula.length-1]&&"*"!==formula[formula.length-1]&&"/"!==formula[formula.length-1]&&formula.length>0&&(formula.push("*"),solution="*",$(".problem").html(formula),$(".answer").html(solution))}),$(".divide").on("click",function(){"+"!==formula[formula.length-1]&&"-"!==formula[formula.length-1]&&"*"!==formula[formula.length-1]&&"/"!==formula[formula.length-1]&&formula.length>0&&(formula.push("/"),solution="/",$(".problem").html(formula),$(".answer").html(solution))}),$(".equals").on("click",function(){var str=formula.join(""),finalSolution=eval(str);formula=[finalSolution],$(".answer").html(finalSolution)}),$(".allClear").on("click",function(){formula=[],solution="",$(".problem").html("0"),$(".answer").html("0")}),$(".clear").on("click",function(){formula.splice(-1,1),solution=solution.slice(0,-1),0===formula.length?($(".problem").html("0"),$(".answer").html("0")):($(".problem").html(formula),$(".answer").html(solution))})});