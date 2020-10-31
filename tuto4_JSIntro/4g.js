function type(object) {
    return typeof object;
}

let inputs = new Map([
    ["string", "hello"],
    ["number", 1],
    ["bigint", 1n],
    ["undefined"],
    ["boolean", true],
    ["symbol", Symbol("a")],
    ["object", {}],
    ["function", type],
    ["null", null]
]);

inputs.forEach((value, key) => console.log("argument", key, "is of type", type(value)));

