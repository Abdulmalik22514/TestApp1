import React from 'react';
import {SafeAreaView, StatusBar, ScrollView} from 'react-native';
import * as Colors from './colors';

export const Container = ({
  children,
  barColor = Colors.White,
  backgroundColor = Colors.White,
}) => {
  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView style={{backgroundColor: barColor}} />
      <ScrollView style={{backgroundColor, flex: 1}}>{children}</ScrollView>
    </>
  );
};
