import {StyleSheet} from 'react-native';

import {colors} from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    paddingHorizontal: 15,
  },
});
