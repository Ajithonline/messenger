import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  btn: {
    flex: 1,
    padding: 10,
    borderRadius: 14,
  },
  btnLabelActicve: {
    textAlign: 'center',
    fontSize: 13,
    fontWeight: '700',
    color: colors.zblack,
    textTransform: 'uppercase',
  },
  btnLabelInacticve: {
    textAlign: 'center',
    fontSize: 13,
    fontWeight: '700',
    color: colors.gray02,
    textTransform: 'uppercase',
  },
});
