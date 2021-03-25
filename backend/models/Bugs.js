const mongoose = require('mongoose');
const User = require('./User');
const { UserM, UserInstance } = require('./User');

const BugsSchema = mongoose.Schema({
    bug_title: {
        type: String,
        required: true
    },
    bug_details: {
        type: String,
        required: true
    },
    bug_created_by: {
        type: UserInstance,
        required: true,
        unique: false
    },
    last_modified_by: {
        type: User,
        required: true,
        unique: false
    },
    date_created: {
        type: Date,
        default: Date.now()
    },
    date_last_modified: {
        type: Date,
        default: Date.now()
    },
    tags: [{
        type: String
    }],
    priority: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
})

module.exports = {
    BugsM: mongoose.model('Bugs', BugsSchema),
    BugsInstance: BugsSchema
}