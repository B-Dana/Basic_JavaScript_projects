function full_sentence() {
    var part1 = "I have ";
    var part2 = "made this ";
    var part3 = "into a complete ";
    var part4 = "sentence.";
    var whole = part1.concat(part2, part3, part4);
    document.getElementById("concat").innerHTML = whole;
}

function slice_method() {
    var sentence = "All work and no play makes Johnny a dull boy";
    var section = sentence.slice(27, 33);
    document.getElementById("slice").innerHTML=section;
}

function myFunction() {
    var text = document.getElementById("demo").innerHTML
    document.getElementById("demo").innerHTML = text.toUpperCase();   
}

var str = "Please locate where locate occurs";
var pos = str.search("locate");
document.getElementById("demo2").innerHTML = pos;

function to_string() {
    var X = 25;
    document.getElementById("demo3").innerHTML = X.toString();
}

function to_precision() {
    var X = 232244.87688678798;
    document.getElementById("demo4").innerHTML = X.toPrecision(7);
}

function to_fixed() {
    var X = 5.677887;
    document.getElementById("demo5").innerHTML = X.toFixed(2);
}

function value_of() {
    var X = 25;
    document.getElementById("demo6").innerHTML = X.valueOf();
}