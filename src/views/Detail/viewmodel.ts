import {useCallback} from 'react';
import {useRoute} from '@react-navigation/native';
import {Props} from './types';
import {useNavigation} from '@react-navigation/native';

const useViewModel = () => {
  const {goBack} = useNavigation();

  const {
    params: {id},
  } = useRoute<Props['route']>();

  console.log('Dentro de la screen Detail', id);
  // TODO: FILTRAR DEL ARRAY DE LESSONS, AQUELLA LESSON CUYO ID SEA IGUAL AL ID QUE RECIBIMOS POR PARAMS.

  const handlePressFavorite = useCallback(() => {}, []);

  return {goBack, handlePressFavorite};
};

export default useViewModel;
