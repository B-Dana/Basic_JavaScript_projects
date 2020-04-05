function ride_function() {
    var height, can_ride;
    height = document.getElementById("height").value;
    can_ride = (height<52) ? "You are too short":"You are tall enough";
    document.getElementById("ride").innerHTML = can_ride+" to ride.";
}

function vote_function() {
    var age, can_vote;
    age = document.getElementById("age").value;
    can_vote = (age<18) ? "You are not old enough to":"You can";
    document.getElementById("vote").innerHTML = can_vote+" vote!";
}

document.write("<br>");
document.write("<br>");

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "red" );
var Emilly = new Vehicle("Jeep", "Trail Hawk", 2019, "white and black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function Animal(Type, Breed, Color) {
    this.Animal_type = Type;
    this.Animal_breed = Breed;
    this.Animal_color = Color;
}
var Snoopy = new Animal("dog", "Spaniel", "white");
function myFunction2() {
    document.getElementById("new_and_this").innerHTML= "I have a "+Snoopy.Animal_type+" named Snoopy. He is a " +Snoopy.Animal_breed;
}

function Person(first, last, age, eye) {
    this.firstName=first;
    this.lastName=last;
    this.age=age;
    this.eyeColor=eye;
}

function countFunction() {
    document.getElementById("nested_function").innerHTML= Count();
    function Count() {
        var Start = 9;
        function Plus_one() {Start +=1;}
        Plus_one();
        return Start;
    }
}
