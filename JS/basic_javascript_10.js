function call_loop() {
    var birthday = document.getElementById("birthday").value;
    var counter = 0;
    var text = "";
    while (counter < birthday) {
        text += "<br> Happy birthday!"
        counter++;
        document.getElementById("loop").innerHTML=text;
    }
}

function myFunction() {
    var str = "Happy Thanksgiving!";
    var n = str.length;
    document.getElementById("demo").innerHTML=n;
}

var instruments = ["Guitar", "Flute", "Violin", "Piano", "Trumpet"];
var content = "";
var Y;
function for_loop() {
    for (Y=0; Y<instruments.length; Y++) {
        content += instruments[Y] + "<br>";
    }
    document.getElementById("list_of_instruments").innerHTML=content;
}

function arrayFunction() {
    var cat_picture = [];
    cat_picture[0] = "sleeping";
    cat_picture[1] = "playing";
    cat_picture[2] = "eating";
    document.getElementById("array").innerHTML = "In this picture the cat is "+cat_picture[1];
}

function constant_function() {
    const Car = {make:"Ford", model:"Mustang", color:"red"};
    Car.color = "white";
    Car.year = "1971"
    document.getElementById("constant").innerHTML="John has "+Car.color+" colored " +Car.make+ " "+Car.model+" manufactured in "+Car.year;
}

var X = 30; // this defines a variable x with value of 30
document.write(X);
{
    let X = 20;
    document.write("<br>" + X);
}
document.write("<br>" + X);


function mathFunction() {
    return Math.PI;
}
document.getElementById("pi").innerHTML=mathFunction();

let animal = {
    type: "dog",
    breed: "Spaniel",
    age: 4,
    color: "white",
    description: function() {
        return "The animal is a " + this.type + " - "+this.age + " years old " + this.color + " "+this.breed;
    }
}
document.getElementById("animal_object").innerHTML = animal.description();

var text = "";
var i;
for (i = 0; i<5; i++) {
    if (i ===3) {break;}
    text += "The number is "+i+"<br>";
}
document.getElementById("demo2").innerHTML=text;


var str = "";
var x;
for (x = 0; x<5; x++) {
    if (x ===3) {continue;}
    str += "The number is "+x+"<br>";
}
document.getElementById("demo3").innerHTML=str;