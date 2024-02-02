import {useCallback, useState} from 'react';

const useViewModel = () => {
  const [buttonId, setButtonId] = useState('');

  const handlePressButton = useCallback((id: string) => {
    setButtonId(id);
  }, []);

  return {
    buttonId,
    handlePressButton,
  };
};

export default useViewModel;
