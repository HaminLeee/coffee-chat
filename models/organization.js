
/* Organization mongoose model */
const mongoose = require('mongoose')

const MemberSchema = new mongoose.Schema({  
    name: String,  
    occupation: String  
});  
  

const Organization = mongoose.model('Organization', {
	name: {
		type: String,
		required: true,
		minlegth: 1,
		trim: true
	},
	description: {
		type: String,
		required: true,
		minlegth: 3,
	},
	people: {
		type: [MemberSchema],
	}
})

module.exports = { Organization }