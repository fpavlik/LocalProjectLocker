var DbClass = require('../tools/DbClass');

var projectPage = (req, res, next) => {
    var projectName = req.params[0].replace('=','');
    DbClass.findProject(projectName)
    .then((result, err) => {
        if (err) console.log("​projectPage -> err", err);
        res.render('projectPage', {project: result});
        
    })
    .catch(err => {
		console.log("​projectPage -> err", err)
        
    });

};

module.exports = projectPage;