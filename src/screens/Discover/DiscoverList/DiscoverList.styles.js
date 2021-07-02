import {StyleSheet} from 'react-native';
import {colors} from '../../../theme/colors';

export const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    marginHorizontal: 15,
    paddingVertical: 15,
    alignItems: 'center',
    flex: 1,
  },
  peopleIcon: {
    width: 60,
    height: 60,
    marginRight: 15,
  },
  label1: {
    fontSize: 17,
    fontWeight: '600',
  },
  subHeading: {
    fontSize: 13,
    fontWeight: '400',
    color: colors.gray02,
  },
});
