import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useCallback, useState} from 'react';

const useViewModel = () => {
  const [buttonId, setButtonId] = useState('');
  const [showHorizontalCards, setShowHorizontalCards] = useState(false);
  const [showVerticalCards, setShowVerticalCards] = useState(true);
  // const [showPruebaFiltro, setPruebaFiltro] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const navigation = useNavigation<StackNavigationProp<StackParamList>>();

  const handlePressButton = useCallback((id: string) => {
    setButtonId(id);
    setShowHorizontalCards(id !== 'all');
    setShowVerticalCards(id === 'all');
    // setPruebaFiltro(id === 'mindfulness');
    setSelectedCategory(id);
    console.log('Button pressed with id:', id);
  }, []);

  return {
    navigation,
    buttonId,
    handlePressButton,
    showHorizontalCards,
    showVerticalCards,
    // showPruebaFiltro,
    selectedCategory,
  };
};

export default useViewModel;
