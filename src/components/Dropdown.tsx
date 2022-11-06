import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveItem } from '../store/dropBox-slice';
import styled from 'styled-components';
import { TokenInfo } from '../type';
import { RootState } from '../store';
import useOutSideClick from '../hooks/useOutSideClick';

interface DropdownProps {
  options: TokenInfo[];
}

const Dropdown = ({ options }: DropdownProps) => {
  const dropDownRef = useRef<HTMLDivElement>(null);
  const [isOpened, updateIsOpened] = useState(false);
  const [scroll, setScroll] = useState<boolean>(false);
  const optionsListRef = useRef<HTMLUListElement>(null);
  const dispatch = useDispatch();
  const activeItem = useSelector(
    (state: RootState) => state.dropBox.activeItem
  );
  const closeHandler = () => {
    updateIsOpened(false);
  };
  useOutSideClick(dropDownRef, closeHandler);

  const handleOptionClick = (item: TokenInfo) => {
    dispatch(setActiveItem(item));
    updateIsOpened(false);
  };

  useEffect(() => {
    if (isOpened) optionsListRef.current?.focus();
  }, [isOpened]);

  useEffect(() => {
    options.length >= 10 ? setScroll(true) : setScroll(false);
  }, [options.length]);

  return (
    <Container ref={dropDownRef}>
      <Button
        type="button"
        isOpened={isOpened}
        onClick={() => updateIsOpened(!isOpened)}
      >
        {activeItem.token_name}
      </Button>
      <OptionList
        tabIndex={-1}
        ref={optionsListRef}
        isOpened={isOpened}
        scroll={scroll}
      >
        {options.map((option: TokenInfo) => (
          <Option
            key={option.token_name}
            isActive={option.token_name === activeItem.token_name}
            onClick={() => handleOptionClick(option)}
          >
            <img
              className="token-img"
              src={option.token_image}
              alt="token image"
            />
            <span className="token-name">{option.token_name}</span>
          </Option>
        ))}
      </OptionList>
    </Container>
  );
};

export default Dropdown;

const Container = styled.div`
  position: relative;
  width: 100%;
  display: inline-block;
`;

const Button = styled.button<{ isOpened: boolean }>`
  width: 100%;
  padding: 10px 30px 10px 20px;
  font-size: 20px;
  border: none;
  border-right: 2px solid #1c55e1;
  background-color: #f1f1f1;
  color: black;
  border-radius: 3px 0px 0px 3px;
  text-align: left;
  cursor: pointer;

  &::after {
    content: ${({ isOpened }) => (isOpened ? '"\\02C4"' : '"\\02C5"')};
    color: #1c55e1;
    position: absolute;
    right: 20px;
  }
`;

const OptionList = styled.ul<{ isOpened: boolean; scroll: boolean }>`
  display: ${({ isOpened }) => (isOpened ? 'block' : 'none')};
  list-style: none;
  margin-top: 2px;
  background-color: #f1f1f1;
  border-radius: 3px;
  padding: 0;
  position: absolute;
  z-index: 2;
  ${({ scroll }) => scroll && 'overflow-y: scroll;'}
  width: 100%;
  height: ${({ scroll }) => (scroll ? '450px' : 'fit-content')};
`;

const Option = styled.li<{ isActive: boolean }>`
  padding: 10px 20px;
  color: black;
  cursor: pointer;
  display: flex;
  align-items: center;

  .token-name {
    margin-left: 10px;
  }

  .token-img {
    height: 25px;
    width: 25px;
    border-radius: 50%;
  }

  &:hover {
    background: #1c55e1;
    color: white;
  }
`;
