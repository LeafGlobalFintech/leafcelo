const express = require('express')
const Utils = require('../services/Utils')
const Kit = require('@celo/contractkit')
const kit = Kit.newKit('https://alfajores-forno.celo-testnet.org')
const getAccount = require('../services/GetAccountService').getAccount;
const UserModel = require('../models/UserModel');
const router = express.Router();


router.post("/applyForLoan", async (req, res) => {
  try {
    let user = req.userData.user || {}
    console.log(user)
    let userDetail = await UserModel.findOne({ _id: user._id })
    console.log(userDetail, "userDetail")
    if (!userDetail)
      return res.sendError("Token Expire", "User Data not found !");
    if (!userDetail.celoPublicKey) {
      let accountDetail = await getAccount();
      userDetail.celoPublicKey = accountDetail.privateKey;
    }

    let requestLoanObject = {};

    requestLoanObject.loanId = parseInt(Math.random() * 1000000);
    requestLoanObject.loanAmount = req.body.loanAmount;
    requestLoanObject.interestAmount = req.body.interestAmount;
    requestLoanObject.status = req.body.status;
    requestLoanObject.reasonForRejected = req.body.reasonForRejected;

    if (!userDetail.tx) {
      //Call Another API
      userDetail.tx = { loaned: 646464, txid: "ASDFGHJKLZXCVBNMQWERTYIOP" }//Dummy Responce
    }
    // console.log(userDetail)
    await userDetail.save()
    res.sendSuccess(userDetail, "Loan Request added successfully!");
  }
  catch (ex) {
    console.log(ex)
    res.sendError(ex, Utils.parseErrorString(ex));
  }
});

router.get("/getLoanDetail", async (req, res) => {
  // try {
  //   let loanId = req.body.loanId;
  //   let loanObj = await LoanModel.findOne({ loanId: loanId })
  //   res.sendSuccess(loanObj, "Loan Detail.");
  // }
  // catch (ex) {
  //   res.sendError(ex, Utils.parseErrorString(ex));
  // }
})

module.exports = router;
