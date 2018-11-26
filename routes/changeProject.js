var DbClass = require('../tools/DbClass');

var changeProject = (req, res, next) => {
console.log("​changeProject -> req", req.body);
    var updDb = new DbClass(req.body.authorName);
    updDb.updateProject(req.body.projectName, req.body.type,req.body)

};

module.exports = changeProject;