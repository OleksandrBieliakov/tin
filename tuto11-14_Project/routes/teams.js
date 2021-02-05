var express = require('express');
var router = express.Router();
var checkAuthenticated = require('../authenticationCheck').checkAuthenticated;
var db_service = require('../db_service');
var getUserTeams = db_service.getUserTeams;
var addTeam = db_service.addTeam;

router.get('/', checkAuthenticated, function(req, res, next) {
    let teams = getUserTeams(req.user.id);
    res.render('teams', { title: 'Teams', user_name: req.user.name, teams: teams });
});

router.post('/', checkAuthenticated, function(req, res, next) {
    let team = {title: req.body.title};
    addTeam(req.user.id, team);
    res.redirect('/teams');
});


router.get('/:id', checkAuthenticated, function(req, res, next) {
    res.render('team', {id: req.params.id, user_name: req.user.name, title: 'Team'});
});

module.exports = router;