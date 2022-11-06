import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Dropdown from '../Dropdown';
import { tokenList1, tokenList2 } from '../../dummyData';
import styled from 'styled-components';

const Solution_DropDown = () => {
  const [curDropDownList, setDropDownList] = useState<boolean>(true);
  const activeItem = useSelector(
    (state: RootState) => state.dropBox.activeItem
  );

  return (
    <Styled_Solution_DropDown>
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
    </Styled_Solution_DropDown>
  );
};

export default Solution_DropDown;

const Styled_Solution_DropDown = styled.section`
  width: 300px;

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
`;
