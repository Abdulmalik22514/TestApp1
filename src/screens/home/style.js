import {StyleSheet} from 'react-native';

export const HomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    marginVertical: 10,
    justifyContent: 'space-between',
    width: 250,
  },
  heading: {
    fontSize: 40,
    fontWeight: '700',
  },
  title: {
    fontSize: 22,
    fontWeight: '300',
  },
  textBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'black',
    marginRight: 5,
  },
});
