const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 30
    },
    address: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true,
        min: 10,

    },
    email: {
        type: String,
  
        trim: true,
        unique: true
    },
    Adharcardnumber: {
        type: String,
        required: true,
        unique: true
    },
    date:{
        type: String,
        required:true
    }
  
});

userSchema.pre('save', async function (next) {
    const user = this;
    if (!user.isModified('password')) {
        next();
    }
    user.password = await bcrypt.hash(user.password, 10);
});

userSchema.methods.generateJwtToken = function () {
    return jwt.sign({ id: this._id }, process.env.SECRET_KEY, { expiresIn: '5d' });
};

module.exports = mongoose.model('User', userSchema);
