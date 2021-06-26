import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  userName: {
    fontSize: 13,
    fontWeight: '400',
    color: colors.gray02,
  },
  userIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
});
