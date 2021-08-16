import {StyleSheet} from 'react-native';

export const StoriesStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  storiesText: {
    fontSize: 25,
    fontWeight: '400',
    textDecorationLine: 'underline',
    marginLeft: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '400',
    marginBottom: 10,
  },
});
