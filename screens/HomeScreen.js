import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import {StoryContainer} from 'react-native-stories-view';
import AvatarWithStory from '../components/AvatarWithStory';
const HomeScreen = ({navigation}) => {
  const [filterUsers, setFilterUsers] = useState([]);

  useEffect(() => {
    fetchPost();

    return () => {};
  }, []);

  const fetchPost = () => {
    const apiURL =
      'http://my-json-server.typicode.com/shakeebM/StoriesApi/stories';
    fetch(apiURL)
      .then(response => response.json())
      .then(responseJson => {
        setFilterUsers(responseJson);
        //console.log(filterUsers);
      })
      .catch(error => {
        console.log(error);
      });
  };

  var profile = [];
  const storie = [];

  filterUsers.map((user, id) => profile.push(user.profile));

  var profile = profile.filter(
    ({id}, i, _arr) => _arr.findIndex(elem => elem.id === id) === i,
  );

  if (!filterUsers.empty) {
    filterUsers.forEach(story => {
      storie.push({
        id: story.profile.id,
        title: story.title,
        read_status: story.read_status,
        image: story.image,
      });
    });
  }

  var stories = [];

  storie.forEach(function (item) {
    var existing = stories.filter(function (v, i) {
      return v.id == item.id;
    });
    if (existing.length) {
      var existingIndex = stories.indexOf(existing[0]);
      stories[existingIndex].image  = stories[existingIndex].image.concat(
        item.image,
      );
      stories[existingIndex].title  = stories[existingIndex].title.concat(
        item.title,
      );
    } else {
      if (typeof item.image || typeof item.title == 'string')
      item.image = [item.image];
      item.title = [item.title];
      stories.push(item);
    }
  });

  //console.log(stories);

  return (
    <View style={styles.container}>
      {profile &&
        profile.map((user, id) => (
          <AvatarWithStory
            key={id}
            data={{...user, stories}}
            navigation={navigation}
          />
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default HomeScreen;
