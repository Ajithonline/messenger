import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Header from '../../components/Header/Header';
import SearchBox from '../../components/SearchBox/SearchBox';
import StorySlider from '../../components/StorySlider/StorySlider';
import {images} from '../../images';
import {styles} from './Chat.styles';
import UserListing from './UserListing/UserListing';

const DATA = [
  {id: 0, image: images.your_story, user: 'Your story'},
  {id: 1, image: images.user_1, user: 'Martin'},
  {id: 2, image: images.user_2, user: 'Martin'},
  {id: 3, image: images.user_3, user: 'Karen'},
  {id: 4, image: images.user_4, user: 'Martha'},
  {id: 5, image: images.user_5, user: 'Joshua'},
];

const Chats = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        heading="Chats"
        icon1={images.take_photo}
        icon2={images.new_message}
      />
      <SearchBox />
      <StorySlider data={DATA} />
      <UserListing />
    </SafeAreaView>
  );
};

export default Chats;
