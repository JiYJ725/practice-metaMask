import React from 'react';
import styled from 'styled-components';
import Solution_DropDown from './components/Solution/Solution_DropDown';
import Solution_PopUp from './components/Solution/Solution_PopUp';
import Solution_MetaMask from './components/Solution/Solution_MetaMask';

const App = () => {
  return (
    <StyledWrapper>
      <Solution_DropDown />
      <Solution_PopUp />
      <Solution_MetaMask />
    </StyledWrapper>
  );
};

export default App;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5rem;
`;
