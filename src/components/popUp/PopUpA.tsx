import PopUpTemplate from './PopUpTemplate';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { popUpSelector } from '../../store/popUp-slice';
import usePopUp from '../../hooks/usePopUp';
import React from 'react';

interface IPopUpProps {
  title: string;
  onClose: () => void;
}

const PopUpA = ({ onClose }: IPopUpProps) => {
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
      <StyledPopUpA>
        <div>A팝업 입니다.</div>
        <div>현재 {popUpList.length}개의 팝업창이 열렸습니다.</div>
        <button onClick={openPopUpAHandler}>팝업A 띄우기</button>
        <button onClick={openPopUpBHandler}>팝업B 띄우기</button>
        <button onClick={openPopUpCHandler}>팝업C 띄우기</button>
        <button onClick={onClose}>팝업 닫기</button>
      </StyledPopUpA>
    </PopUpTemplate>
  );
};

export default PopUpA;

const StyledPopUpA = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & button {
    margin-top: 1rem;
  }
`;
