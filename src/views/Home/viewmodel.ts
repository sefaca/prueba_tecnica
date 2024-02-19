import {useQuery} from '@apollo/client';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useCallback, useState} from 'react';
import {GET_ITEMS} from '../../common/data/apollo/generated/nodes';
import {Lesson} from './modal';

const useViewModel = () => {
  const {loading, error, data} = useQuery(GET_ITEMS);

  const [buttonCategory, setButtonCategory] = useState('');
  const [showHorizontalCards, setShowHorizontalCards] = useState(false);
  const [showVerticalCards, setShowVerticalCards] = useState(true);
  const [filter, setFilter] = useState('all');

  const navigation = useNavigation<StackNavigationProp<StackParamList>>();

  const apiData = data?.items || ([] as Lesson[]);

  const filteredItems =
    filter === 'all'
      ? apiData
      : apiData.filter(
          (item: {category: {title: string}}) =>
            item.category.title.toLowerCase() === filter.toLowerCase(),
        );
  const handlePressButton = useCallback((id: string) => {
    setButtonCategory(id);
    setShowHorizontalCards(id !== 'all');
    setShowVerticalCards(id === 'all');
    setFilter(id);
  }, []);

  return {
    navigation,
    buttonCategory,
    filteredItems,
    handlePressButton,
    showHorizontalCards,
    showVerticalCards,
    filter,
    loading,
    error,
    data,
  };
};

export default useViewModel;
