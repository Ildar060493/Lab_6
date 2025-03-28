import React from 'react';
import { FlatList, View, Text, Image, StyleSheet } from 'react-native';

const App = () => {
  const facts = [
    {
      title: 'Факт 1',
      image: 'https://trashbox.ru/ifiles/858544_a3b28a_1024_500.png_min/kratkie-fakty-1.39-7.jpg',
      description: 'Описание факта 1...',
    },
    {
      title: 'Факт 2',
      image: 'http://стофактов.рф/wp-content/uploads/2015/11/facts.jpg',
      description: 'Описание факта 2...',
    },
    // Добавьте остальные факты
  ];

  return (
    <FlatList
      data={facts}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.date}>Дата: {new Date().toLocaleDateString()}</Text>
          <Text style={styles.title}>{item.title}</Text>
          <Image source={{ uri: item.image }} style={styles.image} />
          <Text style={styles.description}>{item.description}</Text>
        </View>
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  date: {
    fontSize: 12,
    color: 'gray',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginVertical: 10,
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
});

export default App;
