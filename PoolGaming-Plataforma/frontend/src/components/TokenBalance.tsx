import React, { useEffect, useState } from 'react';
import { getAccounts } from '../services/web3Service';
import { getBalance } from '../services/poolTokenService';

export default function TokenBalance() {
  const [balance, setBalance] = useState('0');
  const [account, setAccount] = useState('');

  useEffect(() => {
    async function fetchBalance() {
      const accounts = await getAccounts();
      if (accounts.length > 0) {
        setAccount(accounts[0]);
        const bal = await getBalance(accounts[0]);
        setBalance(bal);
      }
    }
    fetchBalance();
  }, []);

  return (
    <div>
      <h3>Seu saldo de PoolToken</h3>
      <p>Conta: {account}</p>
      <p>Saldo: {balance}</p>
    </div>
  );
}
