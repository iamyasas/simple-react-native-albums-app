import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const { containerStyle, labelStyle, inputStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{ label }</Text>
      <TextInput
        autoCorrect={false}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    lineHeight: 40
  },
  labelStyle: {
    paddingLeft: 20,
    fontSize: 18,
    flex: 1
  },
  inputStyle: {
    paddingRight: 5,
    paddingLeft: 5,
    color: '#000',
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  }

});

export { Input };
