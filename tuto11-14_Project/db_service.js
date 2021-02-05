const users = []
var next_id = 1;

function addUser(user) {
    user.id = next_id++;
    users.push(user);
}

function getUsers() {
    return users;
}

function getUserByEmail(email) {
    return users.find(user => user.email === email);
}

function getUserById(id) {
    return users.find(user => user.id === id);
}

module.exports.addUser = addUser
module.exports.getUsers = getUsers
module.exports.getUserByEmail = getUserByEmail
module.exports.getUserById = getUserById