// Object initializer
let triangle = {
    sideA: 3,
    sideB: 4,
    sideC: 5,
    perimeter: function () {
        return this.sideA + this.sideB + this.sideC;
    },
    area: function () {
        let p = this.perimeter() / 2;
        return Math.sqrt(p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC));
    }
}

function printProperties(object) {
    for (let propertyName in object) {
        let property = object[propertyName];
        console.log("name: " + propertyName + "\nvalue:" + property + "\ntype:" + typeof property + "\n");
    }
}

printProperties(triangle);