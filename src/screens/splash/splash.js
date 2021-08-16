import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import * as Colors from '../../common/colors';
import * as Images from '../../../assets/images';

export default function SplashScreen() {
  return (
    <View style={styles.SplashScreen_RootView}>
      <Image source={Images.QuickCheck2} style={styles.splashImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  SplashScreen_RootView: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.Orange,
  },
  splashImage: {
    width: 250,
    height: 200,
  },
});
