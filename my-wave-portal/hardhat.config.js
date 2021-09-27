require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/3GLxRAltndFlA6CYcGVjCITGaCgSfXTm',
      accounts: ['b6eec92943d028919246ac2191e280c82baa20391c63c9302563b03f75792904'],
    },
  },
};