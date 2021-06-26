import React from 'react';
import {View, Image, TextInput} from 'react-native';
import {images} from '../../images';
import {colors} from '../../theme/colors';

import {styles} from './SearchBox.styles';

const SearchBox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image style={styles.searchIcon} source={images.search} />
        <TextInput placeholderTextColor={colors.gray02} placeholder="Search" />
      </View>
    </View>
  );
};

export default SearchBox;
