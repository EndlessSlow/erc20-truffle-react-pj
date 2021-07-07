const path = require("path");
require('dotenv').config({ path: './.env' });
const HDWalletProvider = require("@truffle/hdwallet-provider");
const MetaMaskAccountIndex = 0;

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    develop: {
      port: 7545,
      network_id: 1337,
      host: "127.0.0.1"
    },
    ganache_local: {
      provider: function () {
        return new HDWalletProvider(process.env.MNEMONIC, "http://127.0.0.1:7545", MetaMaskAccountIndex)
      },
      network_id: 1337
    },
    ropsten_infura: {
      provider: function () {
        return new HDWalletProvider(process.env.MNEMONIC, "https://ropsten.infura.io/v3/8938a8b23d2c46c6a690ac964df9f82b", MetaMaskAccountIndex)
      },
      network_id: 3
    },
    rinkeby_infura: {
      provider: function () {
        return new HDWalletProvider(process.env.MNEMONIC, "https://rinkeby.infura.io/v3/8938a8b23d2c46c6a690ac964df9f82b", MetaMaskAccountIndex)
      },
      network_id: 4
    },
    goerli_infura: {
      provider: function () {
        return new HDWalletProvider(process.env.MNEMONIC, "https://goerli.infura.io/v3/8938a8b23d2c46c6a690ac964df9f82b", MetaMaskAccountIndex)
      },
      network_id: 5
    },
  },
  compilers: {
    solc: {
      version: "0.6.2"
    }
  }
};