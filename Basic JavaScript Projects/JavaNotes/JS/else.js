function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enought to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}