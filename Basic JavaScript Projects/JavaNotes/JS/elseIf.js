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