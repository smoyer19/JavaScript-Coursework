var student = { // method is a set of code associated with an object that is designed to chage the state of the object
    firstName: "Jane",// method is performed on the object "student"
    lastName: "Smith",
    age: 28,
    gradeAverage: function(avg) {//method collects variables and returns them
        return avg;
    }
}

//Executing the code would be this
student.gradeAverage(3.4);//oject=student method=gradeAverage 3.4= variable
// since the function is part of the object and effects itself it becomes a method
// the action performed by the function is the method