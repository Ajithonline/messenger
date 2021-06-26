import React from 'react';
import {View, Text, Image} from 'react-native';
import {images} from '../../images';
import {styles} from './Header.styles';

const Header = ({heading, icon1, icon2}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image style={styles.avatar} source={images.avatar} />
        <Text style={styles.title}>{heading}</Text>
      </View>
      <View style={styles.row}>
        <Image style={styles.icon} source={icon1} />
        <Image style={styles.icon} source={icon2} />
      </View>
    </View>
  );
};

export default Header;
