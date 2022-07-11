import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap, Header, SelectPicker, TextInput} from '../../components';

const SignUpAddress = () => {
  return (
    <View style={{flex: 1}}>
      <Header
        title={'Address'}
        subTitle={'Make sure it`s valid'}
        onBack={() => {}}
      />
      <View style={styles.container}>
        <TextInput
          label={'Phone Number'}
          placeholder={'Type your phone number'}
        />
        <Gap height={16} />
        <TextInput label={'Address'} placeholder={'Type your address'} />
        <Gap height={16} />
        <TextInput label={'House No.'} placeholder={'Type your house number'} />
        <Gap height={24} />
        <SelectPicker />
        <Gap height={24} />
        <Button text={'Sign Up Now'} />
        <Gap height={12} />
      </View>
    </View>
  );
};

export default SignUpAddress;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },
});
