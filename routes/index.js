var express = require('express');
var router = express.Router();
var checkAuthor = require('./checkAuthor');
var createAuthor = require('./createAuthor');
var showProjects = require('./showProjects');
var projectPage = require('./projectPage');
var changeProject = require('./changeProject');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Local Project Locker', about: 'U can use it to hold your logins and passwords of each project of each service (DB, server, admin panel, etc.)' });
});

router.get('/go', checkAuthor);

router.get('/newAuthor', createAuthor);

router.get('/author*', showProjects);

router.get('/project*', projectPage);

router.post('/changeProject', changeProject);


module.exports = router;
