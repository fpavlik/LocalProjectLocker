var DbClass = require('../tools/DbClass');

var changeProject = (req, res, next) => {
console.log("​changeProject -> req", req.body);

    DbClass.updateProject(req.body.projectName, req.body.type, req.body, req.body.authorName)
    .then((result, err) => {
        if (err) console.log("​changeProject -> err", err)
        res.redirect('/project='+req.body.projectName);
    })
    .catch ( err => {
		console.log("​changeProject -> err", err) 
    });
};

module.exports = changeProject;