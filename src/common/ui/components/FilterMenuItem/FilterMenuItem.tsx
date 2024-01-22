// FilterMenuItem.tsx
import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {colors} from '../../theme/colors.ts';
import {styles} from './styles.ts';

type FilterMenuItemProps = {
  type: string;
  selected: boolean;
  onPress: () => void;
};

const FilterMenuItem: React.FC<FilterMenuItemProps> = ({
  type,
  selected,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, selected && styles.selected]}
      onPress={onPress}>
      <Text style={styles.text}>{type}</Text>
    </TouchableOpacity>
  );
};

export default FilterMenuItem;
