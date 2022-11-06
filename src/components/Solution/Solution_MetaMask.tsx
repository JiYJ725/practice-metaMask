import styled from 'styled-components';
import useMetaMask from '../../hooks/useMetaMask';
import React, { useEffect, useState } from 'react';

const Solution_MetaMask = () => {
  const [isMetaMask, getAccount, account, chainId, web3] = useMetaMask();
  const [balance, setBalance] = useState<number>();

  useEffect(() => {
    (async function () {
      const balance = await web3?.eth.getBalance(account);
      if (balance !== undefined) setBalance(Number(balance) / 10 ** 18);
    })();
  }, [account, chainId]);

  return (
    <Styled_Solution_MetaMask>
      <h1>Metamask 연동</h1>
      {isMetaMask ? (
        <>
          {!account && <div>MetaMask가 설치되어 있습니다.</div>}
          {!account && <button onClick={getAccount}>지갑 연결</button>}
        </>
      ) : (
        <>
          <div>MetaMask가 설치되어 있지 않습니다.</div>
          <button
            onClick={() =>
              window.open(
                'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=ko',
                '_black'
              )
            }
          >
            MetaMask 설치하기
          </button>
        </>
      )}
      {account && (
        <>
          <div>계정 주소 : {account}</div>
          <div>$ETH 보유 수량 : {balance}</div>
          <div>네트워크 : {chainId}</div>
        </>
      )}
    </Styled_Solution_MetaMask>
  );
};

export default Solution_MetaMask;

const Styled_Solution_MetaMask = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;

  & button {
    margin-top: 1rem;
    padding: 5px 20px;
  }
`;
