import {StyleSheet} from 'react-native';
import {colors} from '../../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingHorizontal: 15,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentContainer: {
    paddingLeft: 15,
  },
  label1: {
    fontSize: 17,
    fontWeight: '700',
    lineHeight: 22,
    color: colors.zblack,
  },
  label2: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 18,
    color: colors.gray02,
  },
  addImageIcon: {
    width: 40,
    height: 40,
  },
});
