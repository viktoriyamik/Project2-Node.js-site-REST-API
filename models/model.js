const mongoose = require('mongoose');
// define mongoose schema
const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    weight: {
        required: true,
        type: Number
    },
    age: {
        required: true,
        type: Number
    }
})

module.exports = mongoose.model('Data', dataSchema)