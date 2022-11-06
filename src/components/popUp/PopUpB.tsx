import PopUpTemplate from './PopUpTemplate';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { popUpSelector } from '../../store/popUp-slice';
import usePopUp from './usePopUp';
import React from 'react';

interface IPopUpProps {
  title: string;
  onClose: () => void;
}

const PopUpB = ({ onClose }: IPopUpProps) => {
  const popUpList = useSelector(popUpSelector);

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
    <PopUpTemplate onClose={onClose}>
      <StyledPopUpB>
        <div>B팝업 입니다.</div>
        <div>현재 {popUpList.length}개의 팝업창이 열렸습니다.</div>
        <button onClick={openPopUpAHandler}>팝업A 띄우기</button>
        <button onClick={openPopUpBHandler}>팝업B 띄우기</button>
        <button onClick={openPopUpCHandler}>팝업C 띄우기</button>
        <button onClick={onClose}>팝업 닫기</button>
      </StyledPopUpB>
    </PopUpTemplate>
  );
};

export default PopUpB;

const StyledPopUpB = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & button {
    margin-top: 1rem;
  }
`;
