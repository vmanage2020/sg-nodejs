const mongoose = require('mongoose');

var cannedresponseSchema = new mongoose.Schema({
    organization_id: {
        type: String
    },
    organization_name: {
        type: String
    },
    cannedResponseTitle: {
        type: String
    },
    canned_response_description:{
          type: String
    },
    organization_abbreviation: {
        type: String
    },
    cannedResponseTitle_id: {
        type: String
    },
    cannedResponseDesc: {
        type: String
    },
    copied_from: {
        type: String
    },
    count: {
        type: String
    },
    canned_response_title: {
        type: String
    },
    is_active: {
        type: Boolean
    },
    sport_name: {
        type: String
    },
    sport_id: {
        type: String
    },
    is_deleted: {
        type: Boolean
    },
    is_used: {
        type: String
    },
    updated_uid: {
        type: String
    },
    created_uid: {
        type: String
    },
    created_datetime: {
        type: Date, default:Date.now()
    },
    updated_datetime: {
        type: Date, default:Date.now()
    },
    keywordForDesc: {
        type : Array
    },
    keywordForSportName: {
        type : Array
    },
    keywords: {
        type : Array
    }
});

// Custom validation for email
/*employeeSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');*/

//mongoose.model('states', stateSchema);
module.exports = mongoose.model('cannedresponses', cannedresponseSchema);
