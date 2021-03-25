const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    hashedPassword: {
        type: String,
        required: true
    },
    teamid: {
        type: String,
        required: false
    }
});
module.exports = {
    UserM: mongoose.model('User', UserSchema),
    UserInstance: UserSchema
}