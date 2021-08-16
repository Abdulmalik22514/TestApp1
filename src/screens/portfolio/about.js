import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {TopLogo} from '../../../assets/svgs';
import * as Images from '../../../assets/images';
import {Container} from '../../common/container';
import * as Colors from '../../common/colors';
import {BackArrow} from '../../../assets/svgs';
import {AboutStyles as styles} from './style';

export default function AboutMe({navigation}) {
  return (
    <Container backgroundColor={Colors.Background}>
      <View style={styles.headerView}>
        <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.pop()}>
          <BackArrow />
        </TouchableOpacity>
        <Text style={styles.heading}>About</Text>
      </View>
      <View style={styles.aboutContainer}>
        <TopLogo />
        <View style={{alignItems: 'center'}}>
          <View
            style={{
              width: 200,
              height: 200,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 100,

              overflow: 'hidden',
            }}>
            <Image
              source={Images.ProfilePic}
              style={styles.avatar}
              resizeMode="contain"
            />
          </View>

          <Text style={styles.myName}>Abdulmalik Ibrahim</Text>
          <Text style={styles.developerText}>Mobile App Developer</Text>
          <Text style={styles.aboutMe}>
            A React Native Developer, passionate about building cross -
            platform, user - friednly and lightweight mobile applications.
          </Text>
          <Text style={styles.aboutMe}>
            I'm a highly coordinated and resourceful person with good
            communication, team - spirit, and problem solving skills.
          </Text>
          <Text style={styles.aboutMe}>
            I have a strong eye for detail and ability to listen to feedbacks
            and incorporate notes effectively.
          </Text>
        </View>
      </View>
    </Container>
  );
}
