// assignment 
if (6 < 9) {
    document.write("6 afraid of 7 cause seven ate 9." + "<br>")
}
// Global Variable
var x = 19;// this variable can be used for both functions
function Add_numbers_1() {
    document.write(11 + x + "<br>");
}
function Add_numbers_2() {
    document.write(x + 100 + "<br>");
}
Add_numbers_1();
Add_numbers_2();

//Local variable
function Add_numbers_3() {// this function displays because y has a value withing the function
    var y = 20;//this variable can only be used by this function
    document.write(20 + y + "<br>");
}
function Add_numbers_4() {// this function does not display because y is not defined globaly
    document.write(y + 100);//since y is local this will not display
}
Add_numbers_3();
Add_numbers_4();

// Debug using console log to see why it's not displaying
function Add_numbers_3() {// this will now display 40 in the console log
    var y = 20;
    console.log(20 + y);
}
function Add_numbers_4(){//Console log tells us that y is not defined
console.log(y + 100);//without a local variable we cant complete function
}
Add_numbers_3();
Add_numbers_4();

// Get date function with if statement
function get_Date() {
    if (new Date().getHours() < 23) { //here I changed time to get the message to display
    document.getElementById("Greeting").innerHTML = "How are you today";
    }
}
//else statement
function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Serve = "Join today!";
    }
    else {
        Serve = "Come back when you are old enough.";
    }
    document.getElementById("Are_you_old_Enough").innerHTML = Serve;
}
// if else else time function
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time <18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}