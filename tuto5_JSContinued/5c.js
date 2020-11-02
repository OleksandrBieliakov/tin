function createStudent(firstName, lastName, id) {
    // Object prototype
    const studentPrototype = {
        firstName: 'Sheldon',
        lastName: 'Cooper',
        id: 1,
        courses: ['Math', 'English', 'Informatics'],
        grades: [],
        averageGrade: function () {
            if (this.grades.length === 0)
                return 0;
            return this.grades.reduce((sum, grade) => sum + grade) / this.grades.length;
        }
    }
    // New object based on prototype
    let student = Object.create(studentPrototype);
    student.firstName = firstName;
    student.lastName = lastName;
    student.id = id;
    return student
}

let student = createStudent('Leonard', 'Hofstadter', 2);

function printProperties(object) {
    for (let propertyName in object) {
        let property = object[propertyName];
        console.log("name: " + propertyName + "\nvalue:" + property + "\ntype:" + typeof property + "\n");
    }
}

printProperties(student);