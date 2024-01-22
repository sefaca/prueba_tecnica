// FilterMenu.tsx
import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import FilterMenuItem from '../FilterMenuItem/FilterMenuItem.tsx';
import {colors} from '../../theme/colors.ts';
import {styles} from './styles.ts';

const FilterMenu: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const handleTypeSelect = (type: string) => {
    setSelectedType(type);
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      <FilterMenuItem
        type="All"
        selected={selectedType === 'All'}
        onPress={() => handleTypeSelect('All')}
      />
      <FilterMenuItem
        type="Harm Reduction"
        selected={selectedType === 'Harm Reduction'}
        onPress={() => handleTypeSelect('Harm Reduction')}
      />
      <FilterMenuItem
        type="Integration"
        selected={selectedType === 'Integration'}
        onPress={() => handleTypeSelect('Integration')}
      />
      <FilterMenuItem
        type="Mindfulness"
        selected={selectedType === 'Mindfulness'}
        onPress={() => handleTypeSelect('Mindfulness')}
      />
      <FilterMenuItem
        type="Tripping"
        selected={selectedType === 'Tripping'}
        onPress={() => handleTypeSelect('Tripping')}
      />
    </ScrollView>
  );
};

export default FilterMenu;
