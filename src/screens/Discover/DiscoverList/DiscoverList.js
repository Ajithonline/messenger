import React from 'react';
import {View, FlatList, Image, Text} from 'react-native';
import {styles} from './DiscoverList.styles';

const DiscoverList = ({data}) => {
  const renderItem = ({item}) => (
    <View style={styles.rowContainer}>
      <Image style={styles.peopleIcon} source={item.image} />
      <View>
        <Text style={styles.label1}>{item.name}</Text>
        <Text style={styles.subHeading}>{item.category}</Text>
        <Text style={styles.subHeading}>{item.content}</Text>
      </View>
    </View>
  );
  return (
    <View>
      <FlatList data={data} renderItem={renderItem} />
    </View>
  );
};

export default DiscoverList;
