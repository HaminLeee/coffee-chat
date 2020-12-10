
/* Person mongoose model */
const mongoose = require('mongoose')

const Person = mongoose.model('Person', {
	name: {
		type: String,
		required: true,
		minlegth: 1,
		trim: true
	},
	occupation: {
		type: String,
		required: true,
        minlegth: 1,
        trim: true
    },
	email: {
		type: String,
		required: true,
		minlegth: 1
		trim: true
	},
    creator: {
		type: mongoose.Schema.Types.ObjectId,
		required: true
	}
})

module.exports = { Person }