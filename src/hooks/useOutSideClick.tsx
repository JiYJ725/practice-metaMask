import { useEffect } from 'react';

const useOutSideClick = (ref: React.RefObject<any>, callback: () => void) => {
  useEffect(() => {
    const clickHandler = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback?.();
      }
    };

    window.addEventListener('mousedown', clickHandler);

    return () => window.removeEventListener('mousedown', clickHandler);
  }, [ref, callback]);
};

export default useOutSideClick;
