import usePopUp from '../../hooks/usePopUp';
import React from 'react';
import styled from 'styled-components';

const Solution_PopUp = () => {
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
    <Styled_Solution_PopUp>
      <h1>팝업</h1>
      - 버튼을 누르면 팝업이 표출됩니다.
      <br />- 3개의 팝업이 표시되고 있는 상황에서 추가적으로 팝업을 띄우려고 할
      경우 콘솔에 요청 무시 메세지가 띄워집니다.
      <button onClick={openPopUpAHandler}>팝업A 띄우기</button>
      <button onClick={openPopUpBHandler}>팝업B 띄우기</button>
      <button onClick={openPopUpCHandler}>팝업C 띄우기</button>
    </Styled_Solution_PopUp>
  );
};

export default Solution_PopUp;

const Styled_Solution_PopUp = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;

  & h1 {
    text-align: center;
  }

  & button {
    margin-top: 1rem;
    padding: 5px 20px;
  }
`;
