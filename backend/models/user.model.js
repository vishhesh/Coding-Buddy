const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const userSchema = new Schema ({
    email : {
        type : String,
        required : true, 
        unique : true,
        trim : true,
        default : ""
    },
    name : {
        type : String,
        required : true, 
        trim : true, 
        default : ""
    },
    codeforcesId : {
        type : String, 
        required : true,
        trim : true,
        default : ""
    },
    password : {
        type : String,
        required : true,
        trim : false
    },
}, 
    {
        timestamp : true
});

userSchema.methods.generateHash = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

userSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

user = mongoose.model('Users', userSchema);
model.exports = user;