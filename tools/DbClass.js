class DB {
    constructor(authorName) {
        this.author = authorName;
    }

    static checkAuthor () {
        const mongoose = require('mongoose');
        const config = require('../config');
        const authorModel = require('../db/authorModel');

        mongoose.connect(config.get('mongodb'),{useNewUrlParser : true});
 
        return authorModel.find({}).exec();
    }

    createAuthor() {
        const mongoose = require('mongoose');
        const config = require('../config');
        const authorModel = require('../db/authorModel');

        mongoose.connect(config.get('mongodb'),{useNewUrlParser : true});

        var newAuthor = new authorModel({name : this.author});
        newAuthor.save( err => {
            if (err) console.log("​DB -> createAuthor -> err", err)
        });
    }

    checkProjects() {
        const mongoose = require('mongoose');
        const config = require('../config');
        const projectModel = require('../db/projectModel');

        mongoose.connect(config.get('mongodb'),{useNewUrlParser : true});

        return projectModel.find({authorName: this.author}).exec();
    }

    createProject(projectName) {
        const mongoose = require('mongoose');
        const config = require('../config');
        const projectModel = require('../db/projectModel');

        mongoose.connect(config.get('mongodb'),{useNewUrlParser : true});

        var newProject = new projectModel({projectName: projectName, authorName: this.author});

        newProject.save(err => {
            if (err) console.log("​DB -> createProject -> err", err)
        });

    }

    static findProject(projectName) {
        const mongoose = require('mongoose');
        const config = require('../config');
        const projectModel = require('../db/projectModel');

        mongoose.connect(config.get('mongodb'),{useNewUrlParser : true});

        return projectModel.findOne({projectName : projectName}).exec()
    }

    static updateProject(projectName, field ,data, author) {
        const mongoose = require('mongoose');
        const config = require('../config');
        const projectModel = require('../db/projectModel');
        console.log("​DB -> staticupdateProject -> data['hosting-addres']", data['hosting-address'])

        mongoose.connect(config.get('mongodb'),{useNewUrlParser : true});

        switch (field) {
            case 'note': 
                return projectModel.updateOne({authorName: author, projectName : projectName}, {$set : {note : data.note}}).exec();
            case 'db':
                return projectModel.updateOne({authorName: author, projectName : projectName}, {
                    $set: {
                        'types.db.login': data['db-login'],
                        'types.db.password': data['db-password'],
                        'types.db.port': data['db-port'],
                        'types.db.note': data['db-note']
                    }
                }).exec();
            case 'hosting':
                return projectModel.updateOne({authorName: author, projectName : projectName}, {
                    $set: {
                        'types.hosting.login': data['hosting-login'],
                        'types.hosting.password': data['hosting-password'],
                        'types.hosting.address': data['hosting-address'],
                        'types.hosting.note': data['hosting-note']
                    }
                }).exec();
            case 'mail':
                return projectModel.updateOne({authorName: author, projectName : projectName}, {
                    $set: {
                        'types.mail.email': data['mail-email'],
                        'types.mail.password': data['mail-password'],
                        'types.mail.note': data['mail-note']
                    }
                }).exec();
            case 'www':
                return projectModel.updateOne({authorName: author, projectName : projectName}, {
                    $set: {
                        'types.www.login': data['www-login'],
                        'types.www.password': data['www-password'],
                        'types.www.address': data['www-address'],
                        'types.www.note': data['www-note']
                    }
                }).exec();
            case 'other':
                return projectModel.updateOne({authorName: author, projectName : projectName}, {
                    $set: {
                        'types.other.login': data['other-login'],
                        'types.other.password': data['other-password'],
                        'types.other.title': data['other-title'],
                        'types.other.note': data['other-note']
                    }
                }).exec();
            default:
                break;
        }
    }
}

module.exports = DB;