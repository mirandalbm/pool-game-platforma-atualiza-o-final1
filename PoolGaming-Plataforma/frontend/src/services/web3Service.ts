import Web3 from 'web3';

let web3: Web3 | null = null;

export const getWeb3 = async () => {
  if (web3) return web3;
  if ((window as any).ethereum) {
    web3 = new Web3((window as any).ethereum);
    await (window as any).ethereum.request({ method: 'eth_requestAccounts' });
    return web3;
  }
  throw new Error('MetaMask não encontrada');
};

export const getAccounts = async () => {
  const w3 = await getWeb3();
  return w3.eth.getAccounts();
};
