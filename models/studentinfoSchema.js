const mongoose = require('mongoose');

const StudentinfoSchema = new mongoose.Schema(
{
    Studentname: { 
        type: String,
        required: true,
        unique: false
    },
    Misno: { 
        type: Number,
        required: false,
        unique: true
    },
});

module.exports = mongoose.model('Studentinfo', StudentinfoSchema);
