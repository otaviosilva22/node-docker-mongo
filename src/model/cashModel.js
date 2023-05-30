const mongoose = require('mongoose');
const {Schema} = mongoose;

const cashSchema = new Schema({
    value: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        require: true
    },
    move_date: {
        type: String,
        require: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('cash', cashSchema);