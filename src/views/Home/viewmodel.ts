import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useCallback, useState} from 'react';

const useViewModel = () => {
  const [buttonId, setButtonId] = useState('');
  const [showHorizontalCards, setShowHorizontalCards] = useState(false);
  const [showVerticalCards, setShowVerticalCards] = useState(true);
  const [showPruebaFiltro, setPruebaFiltro] = useState(false);

  const navigation = useNavigation<StackNavigationProp<StackParamList>>();

  const handlePressButton = useCallback((id: string) => {
    setButtonId(id);
    setShowHorizontalCards(id !== 'all');
    setShowVerticalCards(id === 'all');
    setPruebaFiltro(id === 'mindfulness');
  }, []);

  return {
    navigation,
    buttonId,
    handlePressButton,
    showHorizontalCards,
    showVerticalCards,
    showPruebaFiltro,
  };
};

export default useViewModel;
