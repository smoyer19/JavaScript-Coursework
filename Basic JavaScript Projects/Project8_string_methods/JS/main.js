function learn_Java() {//Concatonate multiple sections of string
    var one ="Will I be able ";
    var two ="to learn Java";
    var three = "Script and retain ";
    var four = "it enough to be successful?";
    var put_it_together = one.concat(two, three, four);
    document.getElementById("say_what").innerHTML = put_it_together;
}

// Taking a piece of a string out and displaying it. 
function cake_method() {
    var sentence = "I love sheet cake, and corner pieces of cake are the best!";
    var section = sentence.slice(23,36);
    document.getElementById("slice_of_cake").innerHTML = section;
}

// stringing together some numbers
function stringy() {
    var cheese = 187;
    document.getElementById("number_string").innerHTML = cheese.toString();
}

//Looks like the precision method rounds to the determined length?
function precision_cut() {
    var pew = 2.69;
    document.getElementById("Precise").innerHTML = pew.toPrecision(2)
}