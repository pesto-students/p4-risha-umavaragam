//Create an object called Teacher derived 
//from the Person class, and implement a method 
//called teach which receives a string calledsubject, 
//and prints out:[teacher's name]is now teaching[subject]

var Person = function() {};
Person.prototype.initialize = function(name,age){
    this.name=name;
    this.age=age;
};
// TODO: create the class Teacher and a method teach 

function Teacher(name, age){
    Person.call(name, age);
}

Object.setPrototypeOf(Teacher.prototype, Person.prototype)

Teacher.prototype.teach = function (value){
    console.log(this.name, "is now teaching",this.age, value);
}

var him = new Teacher();
him.initialize("Adam",45);
him.teach("Inheritance");

