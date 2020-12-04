
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
	people: {
		type: [MemberSchema],
		// default: 1
	},
	creator: {
		type: mongoose.Schema.Types.ObjectId,
		required: true
	}
})

module.exports = { Organization }