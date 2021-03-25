const mongoose = require('mongoose');
const { UserM, UserInstance } = require('./User');

const TeamsSchema = mongoose.Schema({
    teamName: {
        type: String,
        required: true
    },
    createdBy: {
        type: UserInstance,
        required: true
    },
    joinCode: {
        type: String,
        required: true,
        unique: true
    },
    teamMembers: [{
        type: UserInstance,
        default: undefined
    }]  
});

module.exports = mongoose.model('Teams', TeamsSchema)