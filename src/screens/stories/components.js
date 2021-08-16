import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export const StoriesCard = ({title}) => {
  return (
    <View style={styles.container}>
      {!!title && (
        <View style={styles.titleContainer}>
          <View style={styles.dot} />
          <Text style={styles.title}>{title}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'black',
  },

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    paddingRight: 5,
    marginBottom: 25,
    width: '100%',
  },

  title: {
    fontSize: 22,
    marginBottom: 3,
    marginLeft: 7,
    fontWeight: '700',
  },
});
