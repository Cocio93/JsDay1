//Opgave 1
console.log("OPGAVE 1");
var studentid = 1;
var studentname = "Hans";
var isStudent = false;
var student = {id: studentid, name: studentname};
var students = ["hans", "anders", "christian"];
console.log(studentid, studentname, isStudent, student, students);

//Opgave 2
console.log("OPGAVE 2");
var array = [studentid, studentname, student, isStudent];
console.log(typeof array);


//Opgave 3
console.log("OPGAVE 3")
var student1 = new makeStudent(1, "Anders Hensen");
var student2 = new makeStudent(2, "Peter Belli");
var student3 = new makeStudent(3, "Henrik Qvortrup");
var allStudents = [student1, student2, student3];
for (var i = 0; i < allStudents.length; i++) {
    console.log(allStudents[i].toString());
}

function makeStudent(id, name) {
    this.id = id;
    this.name = name;
    this.toString = function () {
        var text = "ID: " + this.id.valueOf() + " Name: " + this.name.valueOf();
        return text;
    };
}

////Opgave 4
console.log("OPGAVE 4");
function makeNewStudent(name, age, isFemale) {
    this.name = name;
    this.age = age;
    this.isFemale = isFemale;
    this.toText = function () {
        return "Name: " + name + " Age: " + age + " - ";
    };

}

var studentList = [new makeNewStudent("Hans", 13, false),
    new makeNewStudent("Peter", 35, false),
    new makeNewStudent("Hanne", 27, true),
    new makeNewStudent("Signe", 19, true)];


var studentsList = new studentCol();
studentsList.getYoungest();
studentsList.getGirls();


function studentCol() {
    var list = studentList;
    this.getYoungest = function () {
        var res = null;
        list.forEach(function (entry) {
            if (res === null) {
                res = entry;
            } else if (entry.age < res.age) {
                res = entry;
            }
        });
        console.log("The youngest student is " + res.name + " with the age of" + res.age);
    };
    this.getGirls = function () {
        list.forEach(function (entry) {
            if (entry.isFemale) {
                console.log(entry.toText() + " is a girl");
            }
        });
    };


}

//Opgave 5
console.log("OPGAVE 5");
var student4 = new makeStudent(4, "Hans Peter");
var student5 = new makeStudent(5, "Anne-Merete");
var student6 = new makeStudent(6, "Arne Jacobsen");
var student7 = new makeStudent(7, "Signe Hansen");

var studentArray = [student4, student5, student6, student7];
iterateStudents();
var studentArray = removeStudent(studentArray, student6);
iterateStudents();

function removeStudent(studentList, student) {
    studentList.forEach(function (entry) {
        if (entry.age === student.age && entry.name === student.name) {
            delete studentList[studentList.indexOf(entry)];
        }
    });

    return studentList;
}

function iterateStudents() {
    console.log("STUDENTS:");
    studentArray.forEach(function (entry) {
        console.log("Name: " + entry.name);
    });
}


//Opgave 6
console.log("OPGAVE 6");
studentList.forEach(function (entry) {
    if (entry.age >= 30) {
        console.log(entry.toText() + " is 30 or above");
    }
});

//Opgave 8
console.log("OPGAVE 8");
function weekDay() {
    var d = new Date();
    var n = d.getDay();
    switch (n) {
        case 0:
            console.log("Today is Saturday");
            break;
        case 1:
            console.log("Today is Sunday");
            break;
        case 2:
            console.log("Today is Monday");
            break;
        case 3:
            console.log("Today is Tuesday");
            break;
        case 4:
            console.log("Today is Wednesday");
            break;
        case 5:
            console.log("Today is Thursday");
            break;
        case 6:
            console.log("Today is Friday");
            break;
    }
}
;

weekDay();

//Opgave 9
console.log("OPGAVE 9");
function animal(name, age, color, isMammal) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.isMammal = isMammal;
    this.toText = function () {
        return "Name: " + name + " Age: " + age + " Color: " + color + " isMammal: " + isMammal;
    };
}

var a1 = new animal("Thomas", 13, "Brown", true);
var a2 = new animal("Lise", 12, "Yellow", false);
var a3 = new animal("Pede", 5, "Purple", true);
var a4 = new animal("Hansi", 7, "Brown", true);
var animalArray = [a1, a2, a3, a4];

animalArray.forEach(function (entry) {
    console.log(entry.toText());
});

//Opgave 10
console.log("OPGAVE 10");
var resultArray = animalArray.filter(function (entry) {
    return entry.isMammal;
});
for (var i = 0; i < resultArray.length; i++) {
    console.log(resultArray[i].toText());
}






