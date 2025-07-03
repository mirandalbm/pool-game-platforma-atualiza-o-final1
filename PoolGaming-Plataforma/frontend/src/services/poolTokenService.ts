import { getWeb3 } from './web3Service';
import PoolTokenAbi from '../../../contracts/artifacts/contracts/PoolToken.sol/PoolToken.json';

const POOL_TOKEN_ADDRESS = 'ENDERECO_DO_CONTRATO_DEPLOYADO'; // Substitua pelo endereço real

export const getPoolTokenContract = async () => {
  const web3 = await getWeb3();
  return new web3.eth.Contract(
    PoolTokenAbi.abi as any,
    POOL_TOKEN_ADDRESS
  );
};

export const getBalance = async (account: string) => {
  const contract = await getPoolTokenContract();
  return contract.methods.balanceOf(account).call();
};
