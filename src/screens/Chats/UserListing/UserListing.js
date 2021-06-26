import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import {SwipeListView} from 'react-native-swipe-list-view';

import {styles} from './UserListing.styles';
import {images} from '../../../images';

const Data = [
  {
    id: 1,
    name: 'Martin Randolph',
    image: images.user_1,
    lastMessage: 'You: What’s man! · 9:40 AM ',
  },
  {
    id: 2,
    name: 'Andrew Parker',
    image: images.user_2,
    lastMessage: 'You: Ok, thanks! · 9:25 AM ',
  },
  {
    id: 2,
    name: 'Karen Castillo',
    image: images.user_3,
    lastMessage: 'You: Ok, See you in To… · Fri',
  },
  {
    id: 2,
    name: 'Maisy Humphrey',
    image: images.user_4,
    lastMessage: 'Have a good day, Maisy! · Fri',
  },
  {
    id: 2,
    name: 'Joshua Lawrence',
    image: images.user_5,
    lastMessage: 'The business plan loo…  · Thu ',
  },
];

const UserListing = () => {
  const renderHiddenItem = (data, rowMap) => (
    <View style={styles.rowBack}>
      <View style={styles.itemRowWrapper}>
        <Image style={styles.itemRowIcon} source={images.camera} />
        <Image style={styles.itemRowIcon} source={images.call} />
        <Image style={styles.itemRowIcon} source={images.video_call} />
      </View>
      <View style={styles.itemRowWrapper}>
        <Image
          style={styles.itemRowIcon}
          source={images.converation_settings}
        />
        <Image style={styles.itemRowIcon} source={images.notifications} />
        <Image style={styles.itemRowIcon} source={images.delete_conversation} />
      </View>
    </View>
  );

  const renderItem = ({item}) => {
    return (
      <View style={styles.userItemContainer}>
        <Image source={item.image} style={styles.userIcon} />
        <View style={styles.userDetailsSectionContainer}>
          <View>
            <Text style={styles.label1}>{item.name}</Text>
            <Text style={styles.label2}>{item.lastMessage}</Text>
          </View>
          <Image source={images.checked} />
        </View>
      </View>
    );
  };
  return (
    <SwipeListView
      data={Data}
      renderItem={renderItem}
      renderHiddenItem={renderHiddenItem}
      leftOpenValue={180}
      rightOpenValue={-180}
    />
  );
};

export default UserListing;
