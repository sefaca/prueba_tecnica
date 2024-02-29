import {useQuery} from '@apollo/client';
import {useCallback, useState} from 'react';
import {GET_ITEMS} from '../../common/data/apollo/generated/nodes';
import {Lesson} from './model';
import {useNavigation} from '@react-navigation/native';

const useViewModel = () => {
  const {navigate} = useNavigation();

  const {loading, error, data} = useQuery(GET_ITEMS);

  const [buttonCategory, setButtonCategory] = useState('');
  const [showHorizontalCards, setShowHorizontalCards] = useState(false);
  const [showVerticalCards, setShowVerticalCards] = useState(true);
  const [filter, setFilter] = useState('all');

  const apiData = data?.items as Lesson[];

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

  const handlePressCard = useCallback(
    (id: string) => {
      const selectedLesson = apiData.find(lesson => lesson.id === id);
      if (selectedLesson) {
        navigate('Detail', {id: selectedLesson.id, lesson: selectedLesson});
      }
    },
    [apiData, navigate],
  );

  return {
    navigate,
    buttonCategory,
    filteredItems,
    handlePressButton,
    handlePressCard,
    showHorizontalCards,
    showVerticalCards,
    filter,
    loading,
    error,
    data,
  };
};

export default useViewModel;
