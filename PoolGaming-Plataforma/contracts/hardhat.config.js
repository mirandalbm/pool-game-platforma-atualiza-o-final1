require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.20",
  paths: {
    sources: "./",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  networks: {
    hardhat: {}
  }
};
