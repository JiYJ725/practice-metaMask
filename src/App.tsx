import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Dropdown from './components/Dropdown';
import { tokenList1, tokenList2 } from './dummyData';
import { RootState } from './store';
import usePopUp from './components/popUp/usePopUp';
import { popUpSelector } from './store/popUp-slice';

function App() {
  const [curDropDownList, setDropDownList] = useState<boolean>(true);
  const activeItem = useSelector(
    (state: RootState) => state.dropBox.activeItem
  );

  const { openPopUp } = usePopUp();

  const openPopUpAHandler = () => {
    openPopUp({ type: 'popUpA' });
  };
  const openPopUpBHandler = () => {
    openPopUp({ type: 'popUpB' });
  };
  const openPopUpCHandler = () => {
    openPopUp({ type: 'popUpC' });
  };

  return (
    <StyledWrapper>
      <section className="dropBox-section">
        <h1>드롭다운</h1>
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
      <section className="popUp-section">
        <h1>팝업</h1>
        - 버튼을 누르면 팝업이 표출됩니다.
        <br />- 3개의 팝업이 표시되고 있는 상황에서 추가적으로 팝업을 띄우려고
        할 경우 콘솔에 요청 무시 메세지가 띄워집니다.
        <button onClick={openPopUpAHandler}>팝업A 띄우기</button>
        <button onClick={openPopUpBHandler}>팝업B 띄우기</button>
        <button onClick={openPopUpCHandler}>팝업C 띄우기</button>
      </section>
      <section className="metaMask-section">
        <h1>Metamask 연동</h1>
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

  & h1 {
    text-align: center;
  }

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

  .popUp-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3rem;

    & button {
      margin-top: 1rem;
      padding: 5px 20px;
    }
  }

  .metaMask-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3rem;
  }
`;
