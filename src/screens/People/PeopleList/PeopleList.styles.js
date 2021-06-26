import {StyleSheet} from 'react-native';
import {colors} from '../../../theme/colors';

export const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    marginHorizontal: 15,
    paddingVertical: 15,
    alignItems: 'center',
    flex: 1,
    borderBottomWidth: 0.3,
    borderBottomColor: colors.gray02,
  },
  peopleIcon: {
    width: 40,
    height: 40,
  },
  rowLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  waveIcon: {
    width: 32,
    height: 32,
    marginRight: 15,
  },
  label1: {
    fontSize: 17,
    fontWeight: '500',
    marginLeft: 15,
    lineHeight: 22,
  },
  timeTag: {
    position: 'absolute',
    top: '61%',
    fontSize: 8,
    backgroundColor: colors.green01,
    paddingHorizontal: 5,
    paddingVertical: 2,
    textAlign: 'center',
    left: '2%',
  },
});
