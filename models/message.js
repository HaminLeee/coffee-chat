/* Message model */
'use strict';

const mongoose = require('mongoose')


const Message = mongoose.model('Message', {
    from: {
        type: String,
        required: true,
    },
    to: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true,
        minLength: 1
    }
})

module.exports = { Message }