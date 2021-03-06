const mongoose = require('mongoose');

var tagsSchema = new mongoose.Schema({
    tag_name: {
        type: String
    },
    organization_abbreviation: {
        type: String
    },
    sport_id: {
        type: String
    },
    is_used: {
        type: Boolean
    },
    sport_name: {
        type: String
    },
    count: {
        type: String
    },
    is_deleted: {
        type: Boolean
    },
    is_active: {
        type: Boolean
    },
    tag_id: {
        type: String
    },
    copied_from: {
        type: String
    },
    organization_name: {
        type: String
    },
    organization_id: {
        type: String
    },
    created_uid: {
        type: String
    },
    updated_uid: {
        type: String
    },
    created_datetime: {
        type: Date, default:Date.now()
    },
    updated_datetime: {
        type: Date, default:Date.now()
    },
    keywordForTagName: {
        type : Array
    },
    keywords: {
        type : Array
    },
    keywordForSportName: {
        type : Array
    }
});

// Custom validation for email
/*employeeSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');*/

//mongoose.model('states', stateSchema);
module.exports = mongoose.model('tags', tagsSchema);
