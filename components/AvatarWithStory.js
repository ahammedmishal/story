import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './style';
Math.random();

const AvatarWithStory = props => {
  let readStatus;

  const stories = props.data.stories;
  console.log(stories);

  props.data.stories.map((story, id) => {
    if (props.data.id == story.id) {
      readStatus = story.read_status;
    }
  });

  const showStory = () => {
    stories.map((story, id) => {
      if (props.data.id == story.id) {
        props.navigation.navigate('StoryPage', {image: story.image,title:story.title});
      }
    });
  };

  return (
    <TouchableOpacity onPress={() => showStory()} style={styles.container}>
      <View
        style={[
          styles.imageContainer,
          {backgroundColor: readStatus ? 'white' : 'green'},
        ]}>
        <Image
          source={{
            uri: props.data.image,
          }}
          style={[styles.avatar]}
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={[styles.title]} numberOfLines={1}>
          {props.data.name}
        </Text>
        <Text style={[styles.time]}>{`${Math.floor(Math.random() * 10) + 1}:${
          Math.floor(Math.random() * 3) + 1
        }0`}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AvatarWithStory;
