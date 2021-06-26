import React from 'react';
import {View, Image, FlatList, Text} from 'react-native';
import {images} from '../../images';
import {styles} from './StorySlider.styles';

const DATA = [
  {id: 0, image: images.your_story, user: 'Your story'},
  {id: 1, image: images.user_1, user: 'Martin'},
  {id: 2, image: images.user_2, user: 'Martin'},
  {id: 3, image: images.user_3, user: 'Karen'},
  {id: 4, image: images.user_4, user: 'Martha'},
  {id: 5, image: images.user_5, user: 'Joshua'},
];

const StorySlider = () => {
  const renderItem = ({item}) => (
    <View style={styles.userIconContainer}>
      <Image source={item.image} />
      <Text style={styles.userName}>{item.user}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={DATA}
        renderItem={renderItem}
      />
    </View>
  );
};

export default StorySlider;
