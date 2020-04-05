function myFunction() {
    var str = "This text is red!";
    var result = str.fontcolor("red");
    document.getElementById("red_text").innerHTML = result;
}

function myFunction2() {
    var sentence = "I am learning";
    sentence += " a lot from this book";
    document.getElementById("concatenate").innerHTML = sentence;
}