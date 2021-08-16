import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Container} from '../../common/container';
import {BackArrow} from '../../../assets/svgs';
import {HomeStyles as styles} from './style';

export default function Home({navigation}) {
  return (
    <>
      <Container>
        <View style={styles.headerView}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.pop()}>
            <BackArrow />
          </TouchableOpacity>
          <Text style={styles.heading}>Home</Text>
        </View>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.textBox}
            onPress={() => navigation.navigate('stories')}
            activeOpacity={0.7}>
            <View style={styles.dot} />
            <Text style={styles.title}>
              Tap here to see the latest Top Stories
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.textBox}
            onPress={() => navigation.navigate('about')}
            activeOpacity={0.7}>
            <View style={styles.dot} />
            <Text style={styles.title}>See my Profile</Text>
          </TouchableOpacity>
        </View>
      </Container>
    </>
  );
}
