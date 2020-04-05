document.write(typeof "Hello World");
document.write("<br>");
document.write(typeof 6);
document.write("<br>");
document.write("<br>");

function myFunction() {
    document.getElementById("demo").innerHTML= 0 / 0;
}


function NaN2() {
document.getElementById("demo2").innerHTML=isNaN("this is a string");
}


function NaN3() {
document.getElementById("demo3").innerHTML=isNaN(9);
}

function infinity() {
    document.getElementById("demo4").innerHTML= 2E310;
}

function negInfinity() {
    document.getElementById("demo5").innerHTML= -3E310;
}

document.write(5<10);
document.write("<br>");

document.write(5>10);
document.write("<br>");
document.write("<br>");

console.log(2+2);

document.write("five"+5);
document.write("<br>");

document.write(10+"ten");
document.write("<br>");
document.write("<br>");

console.log(5>20);

document.write(3+7==10);
document.write("<br>");

document.write(5==10);
document.write("<br>");
document.write("<br>");

X = 43;
Y = 43;
document.write(X===Y);
document.write("<br>");

X = "43";
Y = 60;
document.write(X===Y);
document.write("<br>");

X = "60";
Y = 60;
document.write(X===Y);
document.write("<br>");

X = "sixty";
Y = "forty";
document.write(X===Y);
document.write("<br>");
document.write("<br>");

document.write(4<10 && 5<10);
document.write("<br>");

document.write(5<10 && 8>10);
document.write("<br>");
document.write("<br>");

document.write(6<8 || 6>10);
document.write("<br>");

document.write(5>9 || 7>9);
document.write("<br>");
document.write("<br>");

function notFunction() {
    document.getElementById("not").innerHTML=!(10>20);
}

function notFunction2() {
    document.getElementById("not2").innerHTML=!(10<20);
}








