import { useEffect, useState } from 'react';
import Web3 from 'web3';

const useMetaMask = () => {
  const [isMetaMask, setIsMetaMask] = useState(false);
  const [account, setAccount] = useState<string>('');
  const [chainId, setChainId] = useState<number>();
  const [web3, setWeb3] = useState<Web3 | undefined>(undefined);

  const checkMetaMask = () => {
    try {
      if (window.ethereum) setIsMetaMask(true);
      else setIsMetaMask(false);
    } catch (error) {
      console.error(error);
    }
  };

  const getAccount: any = async () => {
    try {
      const accounts: any = await window.ethereum!.request({
        method: 'eth_requestAccounts',
      });
      console.log(accounts);
      setAccount(accounts[0]);
      const chainId = await window.ethereum!.request({
        method: 'eth_chainId',
      });
      if (Number(chainId) === 1) alert('이더리움 메인넷에 연결되었습니다.');
      setChainId(Number(chainId));
      const web3 = new Web3((window as any).ethereum);
      setWeb3(web3);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    checkMetaMask();
  }, []);

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', getAccount);
      window.ethereum.on('chainChanged', getAccount);
    }
    return () => {
      window.ethereum?.removeListener('accountsChanged', getAccount);
      window.ethereum?.removeListener('chainChanged', getAccount);
    };
  }, []);

  return [isMetaMask, getAccount, account, chainId, web3];
};

export default useMetaMask;
