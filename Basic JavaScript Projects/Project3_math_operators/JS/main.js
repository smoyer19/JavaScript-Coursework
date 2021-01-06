// Math functions
function addFunction() {
    var add = 5 + 2;
    document.getElementById("Math").innerHTML= (5 + 2);
}

function subtractIt() {
    var subtraction = 5 - 2;
    document.getElementById("Minus").innerHTML= (5 - 2);
}

function multiplication () {
    var multiply = 6 * 8;
    document.getElementById("Multiply").innerHTML = "6 * 8 =" + multiply;
}

function division() {
    var divide = 40 / 6;
    document.getElementById("Divide").innerHTML = "48 / 6 =" + divide;
}

function many_maths(){
    var multiPass = (1 + 2) * 10 / 2 -5;
    document.getElementById("Maths").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + multiPass;
}

function modulus_prime(){
    var remainder = 25 % 6;
    document.getElementById("modulus").innerHTML = "When you divide 25 by 6 you have a remainder of: " + remainder;
}

function negation () {
    var x = 10;
    document.getElementById("negatory").innerHTML = -x;
}
// Incrament and Decrement
var V = 68;
V++;
document.write(V);

var Max = 3.14;
Max--;
document.write(Max)

window.alert(Math.random() * 100);

// The JavaScript Math object allows you to perform mathematical tasks on numbers.
function HotPie (){
var circle= Math.PI;
document.getElementById("PieceOPie").innerHTML= Math.PI;
}
