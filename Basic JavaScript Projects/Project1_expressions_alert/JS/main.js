var A = "this is a string";// String Alert box
window.alert (A);

document.write ("Lisa told Bart, \"Knock it off, Bart! Or I'll tell dad!\"<br>\"Eat my shorts!\" Bart responded."); // used operation for quotes and hyphens

 document.write ("\Be who you are and say what you feel,"
 + " because those who mind don\'t matter and those who matter don\'t mind.\""
 +"-Dr. Seuss");// Practiced more hyphen and quote writing

 var B = "How much wood" + " would a wood chuck, chuck."// String concatenating with variable
 document.write (B)

 var Family = "The Moyers", Dad = "Shea", Mom = "Nikki", Daughter = "Abi" 
 son = "Gage";
 document.write (Family); // using multiple variables


var Family = Family.fontcolor("red")// adding colors to my variables
document.write(Family);

var Dad = Dad.fontcolor("blue")
document.write (Dad)

var Mom = Mom.fontcolor("pink")
document.write (Mom)

var Daughter = Daughter.fontcolor("Cyan")
document.write (Daughter)

var son = son.fontcolor("green")
document.write (son)

document.write(3+3) // trying add function

function My_First_Function() { // copying button function created new html for it "JavaFunction.html"
    var str = "This text is green!";
    var result = str.fontcolor("green");
    document.getElementById("Green_Text").innerHTML = result;
}