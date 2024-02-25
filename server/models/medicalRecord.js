const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const medicalRecordSchema = new mongoose.Schema({
    disease: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    drName: {
        type: String,
        required: true
    },
    hospitalNumber: {
        type: String,
        required: true
    },
    medicalReport: {
        type: String,
       
    },
    date: {
        type: Date,
        default: Date.now
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    hospital: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital',
        required: true
    }
});



module.exports = mongoose.model('medicalRecord', medicalRecordSchema);


