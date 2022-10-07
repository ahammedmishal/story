import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const images = [
    'https://cdn.pixabay.com/photo/2017/11/12/09/05/black-2941843_1280.jpg',
    'https://cdn.pixabay.com/photo/2021/10/23/07/27/forest-6734296_1280.jpg',
    'https://cdn.pixabay.com/photo/2021/01/01/21/31/halloween-5880068_1280.jpg',
  ];

const StoryViewer = () => {
  return (
    <View style={styles.container}>
      <Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default StoryViewer;