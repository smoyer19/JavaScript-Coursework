function Soup_Function() {
    var Soup_Output;
    var Soup = document.getElementById("Soup_Input").value;
    var Soup_String = " is a nasty soup";
    switch(Soup) {
        case "Cheese":
            Soup_Output = "Cheese" + Soup_String;
        break;
        case "Onion":
            Soup_Output = "Onion" + Soup_String;
        break;
        case "Chicken Noodle":
            Soup_Output = "Chicken Noodle" + Soup_String;
        break;
        case "Beef Stew":
            Soup_Output = "Beef Stew" + Soup_String;
        break;
        case "Clam Chowder":
            Soup_Output = "Clam Chowder" + Soup_String;
        break;
        case "Pea":
            Soup_Output = "Pea" + Soup_String;
        break;
        default:
        Soup_Output = "Put a soup from the list, this ain't no chicken shack.";
    }
    document.getElementById("Output").innerHTML = Soup_Output;
}

function Soup_Du_Jour() {//utilizing get element by class name
    var A = document.getElementsByClassName("dujour");
    A[0].innerHTML = "Broccoli Soup Sucka!";
}


var c = document.getElementById("Soup");// adding stroke text to canvas
var ctx = c.getContext("2d");
ctx.font = "50px Arial";
ctx.strokeText("SOUP!", 40, 90);


