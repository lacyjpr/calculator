$(document).ready(function(){function zero(a){"number"==typeof formula[0]&&1===formula.length&&(formula=[],solution=""),solution.length<11&&"0"!==solution&&"/"!==formula[formula.length-1]&&(formula.push(a),solution+=a),$(".problem").html(formula),$(".answer").html(solution)}function digit(a){"number"==typeof formula[0]&&1===formula.length&&(formula=[],solution=""),"0"===solution?(solution=a,formula.pop(),formula.push(a)):solution.length<11&&(formula.push(a),solution+=a),$(".problem").html(formula),$(".answer").html(solution)}function decimal(a){solution.length<11&&solution.indexOf(".")===-1&&(formula.push(a),solution+=a),$(".problem").html(formula),$(".answer").html(solution)}function operator(a){"+"!==formula[formula.length-1]&&"-"!==formula[formula.length-1]&&"*"!==formula[formula.length-1]&&"/"!==formula[formula.length-1]&&"."!==formula[formula.length-1]&&formula.length>0&&(formula.push(a),solution="",$(".problem").html(formula),$(".answer").html(a))}function equals(){var str=formula.join(""),finalSolution=eval(str);if(finalSolution=parseFloat(finalSolution),finalSolution=Math.round(1e11*finalSolution)/1e11,finalSolution=finalSolution.toFixed(11).replace(/(\.[0-9]*?)0+$/,"$1"),finalSolution=finalSolution.replace(/\.$/,""),finalSolution>99999999999||finalSolution<-9999999999)$(".answer").html("Overflow!");else{var finalSolution2=parseFloat(finalSolution);formula=[finalSolution2],solution=finalSolution.toString(),$(".answer").html(finalSolution)}}function allClear(){formula=[],solution="",$(".problem").html("0"),$(".answer").html("0")}function clear(){formula.splice(-1,1),solution=solution.substring(0,solution.length-1),$(".problem").html(formula),$(".answer").html(solution),0===formula.length&&$(".problem").html("0"),0===solution.length&&$(".answer").html("0")}var formula=[],solution="",click=new Audio("/calculator/media/click.mp3");$(".btn").on("click",function(){click.play();var a=$(this).text();switch(a){case"0":zero(a);break;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":digit(a);break;case".":decimal(a);break;case"+":case"-":operator(a);break;case"x":a="*",operator(a);break;case"÷":a="/",operator(a);break;case"=":equals();break;case"AC":allClear();break;case"C":clear()}}),$(document).on("keypress",function(a){click.play();var o=a.keyCode?a.keyCode:a.which,l="";switch(o){case 96:case 48:l="0",zero(l);break;case 97:case 49:l="1",digit(l);break;case 98:case 50:l="2",digit(l);break;case 99:case 51:l="3",digit(l);break;case 100:case 52:l="4",digit(l);break;case 101:case 53:l="5",digit(l);break;case 102:case 54:l="6",digit(l);break;case 103:case 55:l="7",digit(l);break;case 104:case 56:l="8",digit(l);break;case 105:case 57:l="9",digit(l);break;case 110:case 190:l=".",decimal(l);break;case 43:case 107:l="+",operator(l);break;case 45:case 109:l="-",operator(l);break;case 47:case 111:l="/",operator(l);break;case 42:case 106:l="*",operator(l);break;case 61:case 13:equals();break;case 46:clear()}})});