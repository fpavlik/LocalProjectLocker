var DbClass = require('../tools/DbClass');

var newProject = (req, res, next) => {
    console.log("​newProject -> req", req.query)
    console.log("​DbClass", DbClass.author)

    //req.params[0] - authorName from url (localhost:3000/author=NAME)
    
    // var newProject = new DbClass(req.params[0]);
    // newProject.checkProjects()
    // .then((result, err) => {
    //     if (err) console.log("​checkAuthor -> err", err)
    //     if (result == '') {
    //         res.render('showProjects');
    //     } else {
    //         var projects = [];
    //         var i = 0;
    //         result.forEach(element => {
    //             if (element.projectName != undefined) {
    //                 projects[i] = element.projectName;
    //             }
    //             i++;
    //         });
            
    //         console.log("​showProjects -> projects", projects)
    //         res.render('showProjects', {projects : projects});
    //     }
    // })
};

module.exports = newProject;