const mongoose = require('mongoose');

const { Schema } = mongoose

const ticketSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    hour: {
        type: String,
        required: true
    },
    seats: {
        type: Array,
        required: true
    },
    name: {
        type: String
    },
    surname: {
        type: String
    },
    phoneNumber: {
        type: Number
    }

});

module.exports = mongoose.model('Ticket', ticketSchema);