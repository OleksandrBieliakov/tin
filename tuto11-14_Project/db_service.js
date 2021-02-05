const users = []
var next_user_id = 1;
var next_team_id = 1;

function addUser(user) {
    user.id = next_user_id++;
    user.teams = [];
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

function getUserTeams(user_id) {
    return getUserById(user_id).teams;
}

function addTeam(user_id, team) {
    team.id = next_team_id++;
    getUserById(user_id).teams.push(team);
}

module.exports.addUser = addUser
module.exports.getUsers = getUsers
module.exports.getUserByEmail = getUserByEmail
module.exports.getUserById = getUserById
module.exports.getUserTeams = getUserTeams
module.exports.addTeam = addTeam

