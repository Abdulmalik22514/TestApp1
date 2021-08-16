import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import {Tick} from '../../assets/svgs';
import * as Colors from '../common/colors';

export const CustomInput = ({
  placeholder,
  style,
  type,
  onChange,
  value,
  label,
  isPassword = true,
}) => {
  const [show, setShow] = useState(true);

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
      {label === 'Password' ? (
        <View style={styles.inputBox}>
          <TextInput
            value={value}
            keyboardType={type}
            style={[styles.username, value && styles.red]}
            placeholder={placeholder}
            onChangeText={onChange}
            secureTextEntry={!show}
          />
          {isPassword && (
            <Text onPress={() => setShow(!show)}>{`${
              show ? 'Hide' : 'Show'
            }`}</Text>
          )}
        </View>
      ) : (
        <View style={styles.inputBox}>
          <TextInput
            value={value}
            keyboardType={type}
            style={[styles.username, value && styles.red]}
            placeholder={placeholder}
            onChangeText={onChange}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  red: {
    borderColor: Colors.Orange,
  },
  username: {
    fontSize: 20,
    // marginHorizontal: 10,
    padding: 3,
    fontWeight: '400',
    color: 'black',
    width: '100%',
    borderBottomWidth: 1,
    borderColor: Colors.Label,
    height: 40,
  },
  label: {
    fontSize: 17,
    marginTop: 20,
    color: Colors.Label,
    fontWeight: '400',
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    width: '100%',
    paddingRight: 10,
  },
});
