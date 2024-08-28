const mongoose = require('mongoose')


const studentSchema = new mongoose.Schema
({

    name: 
    {
        type: String,
        required: true
    },
    tech: 
    {
        type: String,
        required: true
    },
    sub: 
   {
        type: Boolean,
        required: true,
        default: false
    },
    roll:
    {
        type: Number,
        required: true
    },
    CGPA:
    {
        type: Number,
        required: true

    }


})

module.exports = mongoose.model('Student',studentSchema)
