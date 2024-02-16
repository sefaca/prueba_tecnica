import {useCallback, useState} from 'react';

const useViewModel = () => {
  const [buttonId, setButtonId] = useState('');
  const [showHorizontalCards, setShowHorizontalCards] = useState(false);
  const [showVerticalCards, setShowVerticalCards] = useState(true);

  const handlePressButton = useCallback((id: string) => {
    setButtonId(id);
    setShowHorizontalCards(id !== 'all');
    setShowVerticalCards(id === 'all');
  }, []);

  return {
    buttonId,
    handlePressButton,
    showHorizontalCards,
    showVerticalCards,
  };
};

export default useViewModel;
