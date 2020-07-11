const mongoose = require('mongoose');

const userSessionSchema = mongoose.Schema({
    userSessionId : {
        type : String
    },
}, 
{
    timestamps : true,
});

module.exports = mongoose.model('UserSession', userSessionSchema);