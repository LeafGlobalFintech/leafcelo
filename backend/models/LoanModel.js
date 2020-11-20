var mongoose = require('mongoose');
const BaseSchema = require('./BaseSchema');

var LoanSchema = new BaseSchema({
	loanId: {
		type: String,
		required: true,
		unique: true
	},
	loanAmount: {
		type: String,
		required: true
	},
	interestAmount: {
		type: String
	},
	status: {
		type: String
	},
	reasonForRejected: {
		type: String
	}
});

module.exports = mongoose.model('loan', LoanSchema);
