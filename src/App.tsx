import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Dropdown from './components/Dropdown';
import { tokenList1, tokenList2 } from './dummyData';
import { RootState } from './store';

function App() {
  const [curDropDownList, setDropDownList] = useState<boolean>(true);
  const activeItem = useSelector(
    (state: RootState) => state.dropBox.activeItem
  );
  return (
    <StyledWrapper>
      <section>
        <button className="set-button" onClick={() => setDropDownList(true)}>
          OPTION1: 데이터 수 10개 이상으로 설정
        </button>
        <button className="set-button" onClick={() => setDropDownList(false)}>
          OPTION2: 데이터 수 10개 이하로 설정
        </button>
        {curDropDownList ? 'OPTION1' : 'OPTION2'}
        <Dropdown options={curDropDownList ? tokenList1 : tokenList2} />
        <div className="token-info">
          {activeItem.token_name} : {activeItem.token_price}
        </div>
      </section>
    </StyledWrapper>
  );
}

export default App;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5rem;

  & .set-button {
    margin-bottom: 1rem;
    margin-left: 1rem;
    height: 30px;
    width: 300px;
  }

  & .token-info {
    margin-left: 1rem;
    margin-top: 1rem;
  }

  & section {
    width: 300px;
  }
`;
