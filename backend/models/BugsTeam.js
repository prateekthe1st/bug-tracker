const mongoose = require('mongoose');
const { UserM, UserInstance } = require('./User');
const {BugsM, BugsInstance } = require('./Bugs');

const BugsTeamSchema = mongoose.Schema({
    team_id: {
        type: String,
        required: true,
        unique: true
    },
    team_name: {
        type: String,
        required: true,
    },
    bugs: [{
        type: BugsInstance,
        required: false
    }],
    
})

module.exports = mongoose.model('BugsTeam', BugsTeamSchema);