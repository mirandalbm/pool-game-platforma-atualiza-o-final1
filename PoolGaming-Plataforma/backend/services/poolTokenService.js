const Web3 = require('web3');
const PoolTokenAbi = require('../../contracts/artifacts/contracts/PoolToken.sol/PoolToken.json');

const POOL_TOKEN_ADDRESS = 'ENDERECO_DO_CONTRATO_DEPLOYADO'; // Substitua pelo endereço real

let web3;
if (process.env.WEB3_PROVIDER_URL) {
  web3 = new Web3(process.env.WEB3_PROVIDER_URL);
} else {
  web3 = new Web3('http://localhost:8545'); // padrão para local
}

const poolTokenContract = new web3.eth.Contract(PoolTokenAbi.abi, POOL_TOKEN_ADDRESS);

exports.getBalance = async (account) => {
  return poolTokenContract.methods.balanceOf(account).call();
};
