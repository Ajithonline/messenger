import React, {useState, useCallback} from 'react';
import {View, Text, SafeAreaView} from 'react-native';

import {styles} from './Discover.styles';
import Header from '../../components/Header/Header';
import SearchBox from '../../components/SearchBox/SearchBox';
import ToggleButton from '../../components/ToggleButton/ToggleButton';
import StorySlider from '../../components/StorySlider/StorySlider';
import {images} from '../../images';
import DiscoverList from './DiscoverList/DiscoverList';

const toggleSegments = [
  {id: 1, name: 'FOR YOU', isActive: false},
  {id: 2, name: 'Businesses', isActive: true},
];

const DATA = [
  {id: 0, image: images.apple, user: 'Apple'},
  {id: 1, image: images.samsung, user: 'Samsung'},
  {id: 2, image: images.airbnb, user: 'Airbnb'},
];

const DATA1 = [
  {
    id: 1,
    image: images.microsoft,
    name: 'Microsoft',
    category: 'Science, Technology & Engineering',
    content: 'Our mission is to empower every person…',
  },
  {
    id: 2,
    image: images.instagram,
    name: 'Instagram',
    category: 'Business',
    content: 'Bringing you closer to the people and thi…',
  },
  {
    id: 3,
    image: images.disney,
    name: 'Disney',
    category: 'Brand',
    content: 'Disney magic right at your fingertips',
  },
  {
    id: 4,
    image: images.facebook,
    name: 'Jamie Franco',
    category: 'Website',
    content: 'Welcome to the Facebook chat bot. Use i…',
  },
  {
    id: 5,
    image: images.mcdonalds,
    name: 'McDonalds',
    category: 'Budget Restaurant',
    content: 'Dedicated to everyone who says, i’m lovi…',
  },
];

const Discover = () => {
  const [btnSegments, setbtnSegments] = useState(toggleSegments);

  const onTogglePressed = useCallback(
    segment => {
      const segments = [...btnSegments];
      segments.filter(item => {
        if (item.id === segment.id) {
          item.isActive = true;
          return item;
        } else {
          item.isActive = false;
          return item;
        }
      });
      setbtnSegments(segments);
    },
    [btnSegments],
  );
  return (
    <SafeAreaView style={styles.container}>
      <Header heading="Discover" />
      <SearchBox />
      <ToggleButton btnPressed={onTogglePressed} fields={btnSegments} />
      <Text style={styles.title}>Recent</Text>
      <StorySlider data={DATA} />
      <Text style={styles.title}>More</Text>
      <DiscoverList data={DATA1} />
    </SafeAreaView>
  );
};

export default Discover;
