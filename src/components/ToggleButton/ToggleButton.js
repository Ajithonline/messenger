import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {colors} from '../../theme/colors';

import {styles} from './ToggleButton.styles';

const ToggleButton = ({fields, btnPressed}) => {
  console.log(fields);
  return (
    <View style={styles.container}>
      {fields.map(item => (
        <TouchableOpacity
          style={[
            styles.btn,
            {backgroundColor: item.isActive ? colors.gray01 : colors.white},
          ]}
          onPress={() => btnPressed(item)}>
          <Text
            style={
              item.isActive ? styles.btnLabelActicve : styles.btnLabelInacticve
            }>
            {item.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ToggleButton;
