import React from 'react';
import { View, StyleSheet, Button } from 'react-native'
import AppInput from '../../widgets/AppInput/AppInput';

const PlaceInput = ({ onAdd, onChange, value }) => {
  console.log('the value in place input', value)
  return (

    <React.Fragment>

      <AppInput value={value} onChangeText={onChange} placeholder="Place Name" />

      <View style={styles.button}>
        <Button onPress={onAdd} title="Share" />
      </View>

    </React.Fragment>

  );
}

export default PlaceInput;




const styles = StyleSheet.create({
  button:{
    margin: 8
  }
  
})
