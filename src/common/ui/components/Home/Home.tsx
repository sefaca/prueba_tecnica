import React from 'react';
import {View, ScrollView, Text, Image, StyleSheet} from 'react-native';
import {useQuery} from '@apollo/client';
import {GET_ITEMS} from '../../../data/apollo/generated/query';
import {styles} from './styles';

const Home: React.FC = () => {
  const data = [
    {
      title: 'Categoria 1',
      description: 'Breve descripción de la categoría 1',
      author: 'Autor 1',
      image: require('../../../../assets/images/svq.webp'),
    },
    {
      title: 'Categoria 2',
      description: 'Breve descripción de la categoría 2',
      author: 'Autor 2',
      image: require('../../../../assets/images/svq.webp'),
    },
    {
      title: 'Categoria 2',
      description: 'Breve descripción de la categoría 2',
      author: 'Autor 2',
      image: require('../../../../assets/images/svq.webp'),
    },
    {
      title: 'Categoria 2',
      description: 'Breve descripción de la categoría 2',
      author: 'Autor 2',
      image: require('../../../../assets/images/svq.webp'),
    },
    {
      title: 'Categoria 2',
      description: 'Breve descripción de la categoría 2',
      author: 'Autor 2',
      image: require('../../../../assets/images/svq.webp'),
    },
    {
      title: 'Categoria 2',
      description: 'Breve descripción de la categoría 2',
      author: 'Autor 2',
      image: require('../../../../assets/images/svq.webp'),
    },
  ];

  const renderRows = () => {
    const rows = [];
    for (let i = 0; i < data.length; i += 2) {
      const rowData = data.slice(i, i + 2);
      rows.push(
        <View key={i / 2} style={styles.row}>
          {rowData.map(item => (
            <View key={item.id} style={styles.container}>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={styles.author}>{item.author}</Text>
            </View>
          ))}
        </View>,
      );
    }
    return rows;
  };

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.contentContainer}>{renderRows()}</View>
    </ScrollView>
  );
};

export default Home;
