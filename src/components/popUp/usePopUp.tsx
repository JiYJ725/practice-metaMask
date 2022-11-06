import { useDispatch } from 'react-redux';
import { openPopUp, closePopUp } from '../../store/popUp-slice';
import { IPopUp } from '../../store/popUp-slice';

const usePopUp = () => {
  const dispatch = useDispatch();
  const openPopUpHandler = ({ type, props = null }: IPopUp) => {
    dispatch(openPopUp({ type, props }));
  };

  const closePopUpHandler = () => {
    dispatch(closePopUp());
  };

  return { openPopUp: openPopUpHandler, closePopUp: closePopUpHandler };
};

export default usePopUp;
