const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//#region User Schema

var userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: 'Full name can\'t be empty'
    },
    email: {
        type: String,
        required: 'Email can\'t be empty',
        unique: true
    },
    password: {
        type: String,
        required: 'Password can\'t be empty',
        minlength: [4, 'Password must be atleast 4 character long']
    },
    saltSecret: String
});
//#endregion

//#region Custom Validation

//email pattern validation
userSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');
//#endregion

//#region Model Events

userSchema.pre('save', function (next) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash;
            this.saltSecret = salt;
            next();
        });
    });
});
//#endregion

//#region Model Methods

/**
 * Verify user password
 * @param {plain text-password to be verified} password 
 */
userSchema.methods.verifyPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

/**
 * Generate JSON Web Token
 */
userSchema.methods.generateJwt = function () {
    return jwt.sign({
        _id: this._id
        // exp: (new Date().getTime() / 1000) + (process.env.JWT_EXP_MIN * 60)
    }, process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_EXP
        });
}
//#endregion

mongoose.model('User', userSchema);