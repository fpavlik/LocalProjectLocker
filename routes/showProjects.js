var DbClass = require('../tools/DbClass');

var showProjects = (req, res, next) => {
    var authorName = req.params[0].replace('=',''); 
    if (req.query.newProject) {
        var newProject = new DbClass(authorName);
        newProject.createProject(req.query.newProject);
        res.redirect('/author='+authorName);
    } else {
        //authorName - authorName from url (localhost:3000/author=NAME)
        var showProjects = new DbClass(authorName);
        showProjects.checkProjects()
        .then((result, err) => {
			console.log("​showProjects -> result", result)
            if (err) console.log("​checkAuthor -> err", err)
            if (result == '') {
                res.render('showProjects');
            } else {
                var projects = [];
                var i = 0;
                result.forEach(element => {
                    if (element.projectName != undefined) {
                        projects[i] = element.projectName;
                    }
                    i++;
                });
                
                console.log("​showProjects -> projects", projects)
                res.render('showProjects', {projects : projects});
            }
        })
        .catch(err => {
			console.log("​showProjects -> err", err)
        });

    }
    
};

module.exports = showProjects;