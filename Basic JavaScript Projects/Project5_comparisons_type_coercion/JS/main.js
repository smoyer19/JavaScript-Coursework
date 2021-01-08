document.write(typeof "word");//this will display a string type 
document.write(typeof 5);//this will display a number type
//This will display -infinity
document.write(-3E310);
//This will display infinity
document.write(3E310);
document.write(10 > 2);// this will provide a true statement because 10 is greater than 2
document.write(10 < 2);// this will provide a false statement because 10 is no less then 2
console.log(2+2); // this will display 4 in the console
document.write("10" + 5); // this is an example of type coercion by adding the number 5 to the string 10
document.write(10==10);// this uses the double equals to compare the right to the left side this represents a true statement
document.write(3 == 11);// this uses the double equals method to display a false statement
// Triple equal sign will compare both left and right as well as data typ are the same or equal
x = 11/28/1981;
y = 11/28/1981;
document.write(x === y);//true for same data type and value
// producing a false due to different data type and value
x = "myBirthday";
y = 11-28-1981;
document.write(x === y);
//same value different data produces a false
x = 11-28-1981;
x = 11/28/1981;
document.write(x === y);
//same data different value
x = "mybirthday";
y = "birthday";
document.write(x === y);
// AND false
document.write(5 > 10 && 10 > 4);
// AND true
document.write(6 < 9 && 12 > 2);
// OR true
document.write(6 > 9 || 86 > 66);
// OR false
document.write(6 > 9 || 66 > 86);
// NOT function False result
function not_Function() {
    document.getElementById("Not").innerHTML = ! (20 > 10);//20 is greater then 10 is true therfor not false making it false
}
// NOT function True result
function bot_Function() {
    document.getElementById("is").innerHTML = !(5 > 10);
}




