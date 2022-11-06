import styled from 'styled-components';

const ConnectButton = (props: any) => {
  const { isConnected, connectWallet, currentBalance, walletAddress, chainId } =
    props;

  const displayWalletAddress = `${walletAddress?.substring(0, 10)}...`;
  const displayCurrentBalance = `${currentBalance?.toFixed(4)}`;

  return (
    <StyledButton>
      {isConnected ? (
        <div className="buttonContainer">
          <span className="pageButtonBold connectButton">
            {displayCurrentBalance} {chainId}
          </span>
          <span className="pageButtonBold connectButton">{chainId}</span>
          <span className="pageButtonBold connectButton">
            {displayWalletAddress}
          </span>
        </div>
      ) : (
        <div className="btn connectButton" onClick={() => connectWallet()}>
          Connect Wallet
        </div>
      )}
    </StyledButton>
  );
};

export default ConnectButton;

const StyledButton = styled.div`
  .buttonContainer {
    background-color: #fff;
    border-radius: 16px;
    display: inline-block;
  }

  .connectButton {
    background-color: rgba(0, 0, 0, 0.664) !important;
    border-radius: 16px !important;
    border: 1px solid #fff !important;
    color: rgb(240, 240, 240) !important;
    width: 100%;
    height: auto;
    font-size: 20px;
    padding: 5px;
    text-align: center;
  }

  .connectButton:hover {
    border-color: rgb(0, 0, 0) !important;
  }

  .btn {
    margin-right: 50px;
    cursor: pointer;
  }

  .pageButtonBold {
    font-weight: 700;
    padding-left: 15px;
    padding-right: 15px;
  }
`;
