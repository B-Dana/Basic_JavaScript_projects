
function add_1() {
    var X = 10;
    console.log(20 + X +"<br>");
}

function add_2() {
    console.log(X + 100);
}

add_1();
add_2();

function get_Date() {
    if (new Date().getHours()<18) {
        document.getElementById("greeting").innerHTML="How are you today?";
    }
    else {
        document.getElementById("greeting").innerHTML="How are you this evening?";
    }
}

function Vote() {
    var age; 
    age = document.getElementById("age").value;
    if (age<18) {
        document.getElementById("vote").innerHTML="You are too young to vote";
    }
    else {
        document.getElementById("vote").innerHTML="You can vote!"
    }
}

function time_function() {
    var time = new Date().getHours();
    var reply;
    if (time < 12 == time > 0) {
        reply = "It's morning time!";
    }
    else if (time > 12 == time < 18) {
        reply = "It is the afternoon";
    }
    else {
        reply = "It is evening time";
    }
    document.getElementById("time_of_day").innerHTML=reply;
}