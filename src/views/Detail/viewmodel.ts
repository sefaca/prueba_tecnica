import {useCallback, useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native';

const useViewModel = () => {
  const {goBack} = useNavigation();

  const handlePressFavorite = useCallback(() => {}, []);
  const scrollViewRef = useRef<ScrollView | null>(null);
  const scrollToTop = () => {
    console.log('Scrolling to top');
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({x: 0, y: 0, animated: true});
    }
  };
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = (event: any) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    setIsScrolled(offsetY > 0);
  };

  return {
    goBack,
    handlePressFavorite,
    scrollViewRef,
    scrollToTop,
    isScrolled,
    handleScroll,
  };
};

export default useViewModel;
