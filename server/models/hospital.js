const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const hospitalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    phoneNumber: {
        type: String,
        required: true,
        min: 10,
        unique: true
    },
    address: {
        type: String,
        required: true
    },
    email: {
        type: String,
        trim: true,
        unique: true
    },
    registerNumber: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

hospitalSchema.pre('save', async function (next) {
    const hospital = this;
    if (!hospital.isModified('password')) {
        next();
    }
    hospital.password = await bcrypt.hash(hospital.password, 10);
});

hospitalSchema.methods.generateJwtToken = function () {
    return jwt.sign({ id: this._id }, process.env.SECRET_KEY, { expiresIn: '5d' });
};

module.exports = mongoose.model('Hospital', hospitalSchema);

