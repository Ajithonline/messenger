import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: colors.white,
    flex: 1,
  },
  label1: {
    fontSize: 13,
    color: colors.gray02,
    textTransform: 'uppercase',
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
});
