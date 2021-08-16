import {StyleSheet} from 'react-native';
import * as Colors from '../../common/colors';

export const AboutStyles = StyleSheet.create({
  developerText: {
    marginBottom: 40,
    fontSize: 25,
    color: Colors.Purple,
  },
  pictureContainer: {
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    overflow: 'hidden',
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    marginVertical: 10,
  },
  heading: {
    fontSize: 40,
    fontWeight: '700',
    marginLeft: 100,
  },
  aboutContainer: {
    padding: 20,
    backgroundColor: Colors.White,
    borderRadius: 20,
    margin: 20,
  },
  avatar: {
    width: 270,
    height: 230,
    marginTop: 30,
  },
  myName: {
    fontSize: 30,
    fontWeight: '700',
    color: Colors.Purple,
    marginTop: 20,
    marginBottom: 5,
  },
  aboutMe: {
    fontSize: 20,
    fontWeight: '300',
    marginBottom: 10,
    lineHeight: 25,
    width: '100%',
  },
});
