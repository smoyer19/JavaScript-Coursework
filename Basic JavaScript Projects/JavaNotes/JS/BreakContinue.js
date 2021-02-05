var text = "";
var i;
for (i = 0; i < 10; i++) {
    if (i === 3) { break; }//breaks the count at i === 3 
    text += "The number is " + i + "<br>";
}
document.getElementById("broke").innerHTML = text;

var text = "";
var i;
for (i = 0; i < 10; i++) {
    if (i === 3) { continue; }// as opposed to break this will continue at 3 to 10
    text += "The number is " + i + "<br>";
}
document.getElementById("press_start_to_continue").innerHTML = text;