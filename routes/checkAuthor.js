var DbClass = require('../tools/DbClass');

var checkAuthor = (req, res, next) => {
    DbClass.checkAuthor()
    .then( (result, err) => {
        if (err) console.log("​checkAuthor -> err", err)
        if (result == '') {
            res.render('createNewAuthor'); 
        } else {
            var authors = [];
            var i = 0;
            result.forEach(element => {
                if (element.name != undefined) {
                    authors[i] = element.name;
                }
                i++;
            });
            res.render('chooseAuthor', {authors : authors});
        }
    })
};

module.exports = checkAuthor;