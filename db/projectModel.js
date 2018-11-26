const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var projectSchema = new Schema({
    projectName : {
        type : String,
        unique : true,
        required : true
    },
    author : {
        type : mongoose.Schema.ObjectId,
        ref : 'Author'
    },
    authorName : String,
    note : String,
    types : {
        db : [
            {
                login : String,
                password : String,
                port : Number,
                note : String
            }
        ],
        hosting : [
            {
                addres : String,
                login : String,
                password : String,
                note : String,
            }
        ],
        mail : [
            {
                email : String,
                password : String,
                note : String
            }
        ],
        www : [
            {
                adress : String,
                login : String,
                password : String,
                note : String
            }
        ],
        other : [
            {    
                title : String,
                login : String,
                password : String,
                note : String
            }
        ]
    },
    created : {
        type : Date,
        default : Date.now
    }
});

var projectModel = mongoose.model('Project', projectSchema);

module.exports = projectModel;