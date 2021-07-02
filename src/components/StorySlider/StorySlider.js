import React from 'react';
import {View, Image, FlatList, Text} from 'react-native';
import {styles} from './StorySlider.styles';

const StorySlider = ({data}) => {
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
        data={data}
        renderItem={renderItem}
      />
    </View>
  );
};

export default StorySlider;
