import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import useOutSideClick from '../../hooks/useOutSideClick';

interface PopUpTemplateProps {
  onClose: () => void;
  children: React.ReactNode;
}

const PopUpTemplate = ({ onClose, children }: PopUpTemplateProps) => {
  const closeHandler = () => {
    onClose?.();
  };

  useEffect(() => {
    const $body = document.querySelector('body');
    $body!.style.overflow = 'hidden';
    return () => {
      $body!.style.overflow = 'auto';
    };
  }, []);

  return (
    <>
      <Overlay onClick={closeHandler}></Overlay>
      <PopUpWrap>
        <div className="close-btn" onClick={closeHandler}>
          X
        </div>
        <main>{children}</main>
      </PopUpWrap>
    </>
  );
};

export default PopUpTemplate;

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
`;

const PopUpWrap = styled.div`
  width: fit-content;
  max-width: 800px;
  min-width: 230px;
  height: fit-content;
  border-radius: 15px;
  background: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .close-btn {
    align-self: flex-end;
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
`;
