import React from 'react';
import {View, Image, Text} from 'react-native';
import {images} from '../../../images';
import {styles} from './AddYourStory.styles';

const AddYourStory = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.addImageIcon} source={images.your_story} />
      <View style={styles.contentContainer}>
        <Text style={styles.label1}>Your story</Text>
        <Text style={styles.label2}>Add to your story</Text>
      </View>
    </View>
  );
};

export default AddYourStory;
