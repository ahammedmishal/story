import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import {StoryContainer} from 'react-native-stories-view';
const StoryPage = ({navigation, route}) => {
  const images = route.params.image;
  const titles = route.params.title;

  Object.keys(images).forEach(
    k => (images[k] = images[k] === '' ? null : images[k]),
  );

  console.log('sddfsf', images);
  console.log('sddfsf', titles);

  const height = Dimensions.get('window').height;

  return (
    <>
      <StoryContainer
        visible={true}
        enableProgress={true}
        images={images !== '' ? images : null}
        duration={20}
        //  onComplete={() => alert("onComplete")}
        containerStyle={{
          width: '100%',
          height: '100%',
        }}
      />
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            position: 'absolute',
            alignSelf: 'center',
            top: height / 1.1,
          }}>
          {titles}
        </Text>
    </>
  );
};

export default StoryPage;
