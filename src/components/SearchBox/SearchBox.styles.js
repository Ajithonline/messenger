import {StyleSheet} from 'react-native';

import {colors} from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: colors.white,
  },
  contentContainer: {
    flexDirection: 'row',
    backgroundColor: colors.gray01,
    padding: 15,
    marginHorizontal: 15,
    borderRadius: 10,
  },
  searchIcon: {
    width: 16,
    height: 16,
    marginRight: 15,
  },
});
