const Kit = require('@celo/contractkit')
const kit = Kit.newKit('https://alfajores-forno.celo-testnet.org')

const getAccount = require('./getAccount').getAccount

async function awaitWrapper(){
    let account = await getAccount()
    kit.addAccount(account.privateKey)
}
awaitWrapper()

module.exports = {

  networks: {
	test: {
		host: "127.0.0.1",
		port: 7545,
		network_id: "*"
	  },
	  alfajores: {
		provider: kit.web3.currentProvider, // CeloProvider
      	network_id: 44787                   // Alfajores network id
	  }

  }

 

  
}
