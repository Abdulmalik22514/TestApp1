import {StyleSheet} from 'react-native';
import * as Colors from '../../common/colors';

export const LoginStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    backgroundColor: Colors.White,
  },
  welcome: {
    fontSize: 35,
    fontWeight: '700',
    color: Colors.Label,
    marginBottom: 8,
  },
  account: {
    fontSize: 17,
    color: Colors.Label,
    fontWeight: '400',
  },
  user: {
    color: Colors.Black,
    fontSize: 14,
    fontWeight: '300',
  },
  passRememberText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
  },
  recoveryBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  forget: {
    fontSize: 17,
    color: Colors.Orange,
    fontWeight: '400',
  },
  remember: {
    fontSize: 17,
    marginLeft: 7,
    color: Colors.Label,
    fontWeight: '400',
  },
  circle: {
    height: 18,
    width: 18,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: '#979797',
    alignItems: 'center',
    justifyContent: 'center',
  },
  new: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 30,
  },
  up: {
    color: '#E25F38',
    fontSize: 14,
    fontWeight: '300',
  },
});
