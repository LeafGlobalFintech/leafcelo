const Web3 = require('web3')
const fs = require('fs')
const path = require('path')
var web3 = new Web3()


function getAccount() {
    return new Promise(resolve => {
        let randomAccount = web3.eth.accounts.create();
        resolve(randomAccount)
    })
}

module.exports = { getAccount }