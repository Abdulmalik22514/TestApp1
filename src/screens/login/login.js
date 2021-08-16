import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import {CustomInput} from '../../common/inputs';
import {Button} from '../../common/button';
import {LoginStyles as styles} from './style';
import {Container} from '../../common/container';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

export default function Login({navigation}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!username || !password) {
      return Alert.alert('Error', 'Enter your details');
    } else navigation.navigate('home');
  };

  return (
    <Container>
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <View style={{marginTop: 100}}>
            <Text style={styles.welcome}>Welcome!</Text>
            <Text style={styles.account}>Login to your account</Text>
          </View>
          <View style={{marginTop: 30}}>
            <CustomInput
              label="Username"
              value={username}
              onChange={setUsername}
            />
            <CustomInput
              label="Password"
              secure
              value={password}
              onChange={setPassword}
            />
          </View>

          <View style={styles.passRememberText}>
            <View style={styles.recoveryBox}>
              <TouchableOpacity style={styles.circle}>
                <View style={styles.checkedCircle} />
              </TouchableOpacity>
              <Text style={styles.remember}>Remember me</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.forget}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          <Button title="LOGIN" onPress={handleLogin} />
        </View>
      </KeyboardAwareScrollView>
    </Container>
  );
}
