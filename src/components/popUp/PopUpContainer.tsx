import React from 'react';
import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';
import { popUpSelector } from '../../store/popUp-slice';
import usePopUp from './usePopUp';

import PopUpA from './PopUpA';
import PopUpB from './PopUpB';
import PopUpC from './PopUpC';

interface IPopUpComponents {
  [key: string]: any;
}

const PopUpComponents: IPopUpComponents = {
  popUpA: PopUpA,
  popUpB: PopUpB,
  popUpC: PopUpC,
};

const PopUpContainer = () => {
  const { closePopUp } = usePopUp();
  const popUpList = useSelector(popUpSelector);
  const renderPopUp = popUpList.map(({ type, props }, idx) => {
    const PopUpComponent = PopUpComponents[type];
    return <PopUpComponent key={idx} {...props} onClose={closePopUp} />;
  });
  return createPortal(
    <>{renderPopUp}</>,
    document.getElementById('popUp') as HTMLElement
  );
};

export default PopUpContainer;
