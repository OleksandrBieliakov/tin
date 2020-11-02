// Using classes
class Student {
    constructor(firstName, lastName, id, grades) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.grades = grades;
    }

    get fullName() {
        return this.firstName + " " + this.lastName;
    }

    set fullName(name) {
        let parts = name.split(' ');
        if (parts.length !== 2) throw "The full name consists of two fords: firstname and lastname.";
        this.firstName = parts[0];
        this.lastName = parts[1];
    }

    get averageGrade() {
        if (this.grades.length === 0)
            return 0;
        return this.grades.reduce((sum, grade) => sum + grade) / this.grades.length;
    }

    printsStudentAndGradesAverage() {
        console.log(this.fullName, "grades average:", this.averageGrade);
    }
}

let student = new Student("Sheldon", "Cooper", 1, [1, 2, 3, 4, 5]);
student.printsStudentAndGradesAverage();
student.fullName = "Leonard Hofstadter";
console.log("new full name:", student.fullName);
