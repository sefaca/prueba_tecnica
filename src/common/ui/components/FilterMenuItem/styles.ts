// styles.ts para FilterMenuItem
import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors.ts';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 15,
    borderWidth: 1,
    backgroundColor: colors.primary,
    borderColor: colors.primary,
    margin: 5,
    height: 45,
  },
  selected: {
    backgroundColor: colors.secondary,
  },
  text: {
    color: colors.text,
    fontWeight: 'bold',
    fontSize: 20,
  },
});
