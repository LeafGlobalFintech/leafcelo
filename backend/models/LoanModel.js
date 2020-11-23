var mongoose = require('mongoose');
const BaseSchema = require('./BaseSchema');

var LoanSchema = new BaseSchema({
	loanId: {
		type:Number,
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
	},
	tx: {
		type: Object
	}
});
LoanSchema.plugin(global.AutoIncrement, { inc_field: 'loanId', id: "loan", start_seq: 100001 });

module.exports = mongoose.model('loan', LoanSchema);
