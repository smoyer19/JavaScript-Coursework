function A_Dictionary() {// This is a funtion to create a dictionary
    var Animal = {// These add values to the variable animal
        Species: "Cat",
        Color: "Gray",
        Breed: "Russion Blue",
        Age: 14,
        Sound: "Meow!",
    };
    delete Animal.Sound;//This is to delete a value in this case sound
    document.getElementById("Dictionary").innerHTML = Animal.Sound;//this would display the value of animal sound if not deleted but the delete function
}