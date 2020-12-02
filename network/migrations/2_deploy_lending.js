var Lending = artifacts.require('Lending')

module.exports = function(deployer) {
  deployer.deploy(Lending)
}