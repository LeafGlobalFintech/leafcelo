const express = require('express')
const Utils = require('../services/Utils')
const Kit = require('@celo/contractkit')
const kit = Kit.newKit('https://alfajores-forno.celo-testnet.org')
const getAccount = require('../services/GetAccountService').getAccount;
const LoanModel = require('../models/LoanModel')
const router = express.Router();


router.post("/applyForLoan", async (req, res) => {
  try {
    let userDetail = req.userData.user || {}
    if (!userDetail.celoPublicKey) {
      let accountDetail = await getAccount();
      userDetail.celoPublicKey = accountDetail.privateKey;
    }
    if (!userDetail.tx) {
      //Call Another API
    }
    let LoanObject = new LoanModel(userDetail)
    let loanDetail = await LoanObject.save()
    res.sendSuccess(loanDetail, "Loan Request added successfully!");
  }
  catch (ex) {
    res.sendError(ex, Utils.parseErrorString(ex));
  }
});

router.get("/getLoanDetail", async (req, res) => {
  try {
    let loanId = req.body.loanId;
    let loanObj = await LoanModel.findOne({ loanId: loanId })
    res.sendSuccess(loanObj, "Loan Detail.");
  }
  catch (ex) {
    res.sendError(ex, Utils.parseErrorString(ex));
  }
})

module.exports = router;
