import {Platform, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Picker, PickerIOS} from '@react-native-picker/picker';

const SelectPicker = () => {
  return (
    <View>
      <Text style={styles.label}>Label Select Option</Text>
      <View style={styles.input}>
        {Platform.OS === 'ios' ? (
          <PickerIOS
          // selectedValue={selectedLanguage}
          // onValueChange={(itemValue, itemIndex) =>
          //   setSelectedLanguage(itemValue)
          // }
          >
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </PickerIOS>
        ) : (
          <Picker
          // selectedValue={selectedLanguage}
          // onValueChange={(itemValue, itemIndex) =>
          //   setSelectedLanguage(itemValue)
          // }
          >
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
        )}
      </View>
    </View>
  );
};

export default SelectPicker;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  input: {
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 8,
  },
});
