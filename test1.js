import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AvatarWithStory from './components/AvatarWithStory';

const App = () => {
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

  filterUsers.map((user, id) => profile.push(user.profile));

  var profile = profile.filter(
    ({id}, i, _arr) => _arr.findIndex(elem => elem.id === id) === i,
  );

  console.log(profile);

  return (
    <View style={styles.container}>
      {profile &&
        profile.map((user, id) => (
          <AvatarWithStory key={id} user={{...user}} />
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

// export default App;
