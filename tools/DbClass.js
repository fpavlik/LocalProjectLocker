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

    updateProject(projectName, field ,data) {
        const mongoose = require('mongoose');
        const config = require('../config');
        const projectModel = require('../db/projectModel');

        mongoose.connect(config.get('mongodb'),{useNewUrlParser : true});

        switch (field) {
            case 'db':
                return projectModel.updateOne({authorName: this.name, projectName : projectName}, {
                    types : {
                        db: {
                            $set: {
                                login: data.login,
                                password: data.password,
                                port: data.port,
                                note: data.note
                            }
                        }
                    }
                }).exec();
                
                break;
        
            default:
                break;
        }
    }
}

module.exports = DB;