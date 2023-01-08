//Variables

x = Number(0);
y = Number(0);
draw_circle = "";
draw_rectangle = "";

//Functions

//Setting up Speech Recognition

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function startup(){
    document.getElementById("status").innerHTML = "Application is listening. Please speak.";
    recognition.start();
}

//Speech Recognition Function (Converting Speech to Text)

recognition.onresult = function(event) {
    console.log(event);
    content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = 'You said, "' + content + '."';
    if (content == "Circle") {
        x = Number(Math.floor(Math.random * 900)) - 3;
        y = Number(Math.floor(Math.random * 900)) + 4;
        document.getElementById("status").innerHTML = "Preparing to draw circle.";
        draw_circle = "set";
    } else if (content == "rectangle") {
        x = Number(Math.floor(Math.random * 900)) - 3;
        y = Number(Math.floor(Math.random * 900)) + 4;
        document.getElementById("status").innerHTML = "Preparing to draw rectangle.";
        draw_rectangle = "set";
    }
}

//Useless Function for Fun (Called once by p5.js)

function preload(){
    console.log("Don't read this.");
}

//Creating Canvas Function (Called once by p5.js)

function setup(){
    canvas = createCanvas(1300, 900);
}

//Drawing Shapes Function (Called every millisecond by p5.js)

function draw(){
    radius = Number(Math.floor(Math.random() * 100));
    length = Number(Math.floor(Math.random() * 100) + 6);
    width = Number(Math.floor(Math.random() * 100));
    if (draw_circle == "set") {
        circle(x, y, radius);
        console.log("Drawing Circle Complete.");
        document.getElementById("status").innerHTML = "Circle Drawing Complete.";
        draw_circle = "";
    } else if (draw_rectangle == "set") {
        rect(x, y, 100, 50);
        console.log("Drawing Rectangle Complete.");
        document.getElementById("status").innerHTML = "Rectangle Drawing Complete.";
        draw_rectangle = "";
    }
}