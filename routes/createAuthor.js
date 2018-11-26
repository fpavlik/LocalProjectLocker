var DbClass = require('../tools/DbClass');

var createAuthor = (req, res, next) => {
    var newAuthor = new DbClass(req.query.newAuthor);
    newAuthor.createAuthor();
    res.redirect('/go');
};

module.exports = createAuthor;