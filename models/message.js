/* Message model */
'use strict';

const mongoose = require('mongoose')


const Message = mongoose.model('Message', {
    fromId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    toId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    content: {
        type: String,
        required: true,
        minLength: 1
    }
})

module.exports = { Message }