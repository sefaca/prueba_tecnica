import {useCallback} from 'react';
// import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
import {Props} from './types';
import {goBack} from '../../core/navigation/Tabs/services';

const useViewModel = () => {
  // const {goBack} = useNavigation();
  const {
    params: {id},
  } = useRoute<Props['route']>();
  console.log('Detail Screen', id);

  const handlePressFavorite = useCallback(() => {}, []);

  return {goBack, handlePressFavorite};
};

export default useViewModel;
