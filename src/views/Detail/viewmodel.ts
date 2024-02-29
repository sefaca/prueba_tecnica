import {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';

const useViewModel = () => {
  const {goBack} = useNavigation();

  const handlePressFavorite = useCallback(() => {}, []);

  return {goBack, handlePressFavorite};
};

export default useViewModel;
