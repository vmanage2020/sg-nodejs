const mongoose = require('mongoose');

var positionSchema = new mongoose.Schema({
    abbreviation: {
        type: String
    },
    parent_position_name: {
        type: String
    },
    parent_position_id: {
        type: String
    },
    sport_name: {
        type: String
    },
    sport_id: {
        type: String
    },
    sort_order: {
        type: String
    },
    position_name: {
        type: String
    },
    position_id: {
        type: String
    },
    parent_position_abbreviation: {
        type: String
    },
    keywords: {
        type : Array , default : []
    },
    position_id: {
        type: String
    },
    name: {
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
    }
});

// Custom validation for email
/*employeeSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');*/

module.exports = mongoose.model('positions', positionSchema);
