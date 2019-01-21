import React from 'react';
import { View, StyleSheet, Button } from 'react-native'
import AppInput from '../../widgets/AppInput/AppInput';

const PlaceInput = ({ onAdd, onChange, value }) => {
  return (
    <React.Fragment>
      <AppInput value={value} onChange={onChange} placeholder="Place Name" />


      <View style={styles.button}>
        <Button onPress={onAdd} title="Share" />
      </View>
    </React.Fragment>

  );
}

export default PlaceInput;




const styles = StyleSheet.create({
  margin: 8
})
