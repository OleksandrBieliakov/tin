// Constructor function
function Student(firstName, lastName, id, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.grades = grades;

    this.averageGrade = function () {
        if (grades.length === 0)
            return 0;
        return grades.reduce((sum, grade) => sum + grade) / grades.length;
    }

    this.printsStudentAndGradesAverage = function () {
        console.log(firstName, lastName, "grades average:", this.averageGrade());
    }
}

let student = new Student("Sheldon", "Cooper", 1, [1, 2, 3, 4, 5]);
student.printsStudentAndGradesAverage();