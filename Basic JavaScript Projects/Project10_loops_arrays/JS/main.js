function Count_Up() {//while loop
    var Digit = "";
    var X = 1;
    while (X < 20) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting").innerHTML = Digit;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {//for loop
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
        }
        document.getElementById("List_of_Instruments").innerHTML = Content;
}

function dog_pics() {// array
    var Dog_Picture = [];
    Dog_Picture[0] = "sleeping";
    Dog_Picture[1] = "playing";
    Dog_Picture[2] = "eating";
    Dog_Picture[3] = "purring";
    document.getElementById("Dog").innerHTML = "In this picture, the dog is " +
        Dog_Picture[0] + ".";
}

function constant_function() {//assignment
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black", status:"smashed"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " + 
        Musical_Instrument.type + " was " + Musical_Instrument.price;
    Musical_Instrument.price = "$500";
    document.getElementById("Constant").innerHTML = "The cost of the " +
        Musical_Instrument.brand + " was " + Musical_Instrument.price +"  " + Musical_Instrument.status;
}

var blue = "green";
document.write(blue);
{
    let blue = "blue";
    document.write("<br>" + blue);
}

let car = {
    make: "Subaru ",
    model: "WRXsti ",
    year: "2007 ",
    color: "blue ",
    description : function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
        }
    };
    document.getElementById("Car_Object").innerHTML = car.description();