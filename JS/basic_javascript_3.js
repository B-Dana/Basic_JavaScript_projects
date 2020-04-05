function add() {
    var addition = 2+3;
    document.getElementById("math").innerHTML="2+3 = "+addition;
}

function subtract() {
    var subtraction = 7-2;
    document.getElementById("math2").innerHTML="7-2 = "+subtraction;
}

function multiplication() {
    var simple_math = 4 * 5;
    document.getElementById("math3").innerHTML="4 * 5 = "+simple_math;
}

function division() {
    var simple_math = 48 / 6;
    document.getElementById("math4").innerHTML="48 / 6 = "+simple_math;
}

function moreMath() {
    var simple_math = (1+2)*10/2-5;
    document.getElementById("math5").innerHTML="(1+2)*10/2-5 = "+simple_math;
}

function modulusOperator() {
    var simple_math = 25 % 6;
    document.getElementById("math6").innerHTML="when you divide 25 by 6 you have a remainder of: "+simple_math;
}

function negationOperator() {
    var x = 10;
    document.getElementById("math7").innerHTML= -x;
}

var x = 5;
x++;
document.write(x);

var x = 9;
x--;
document.write("<br>");
document.write(x);

document.write("<br>");
document.write(Math.random() * 100);

document.write("<br>");
document.write(Math.ceil(53.4));

