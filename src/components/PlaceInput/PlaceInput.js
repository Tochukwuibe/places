import React from 'react';
import { View, StyleSheet, Button, Text } from 'react-native'
import AppInput from '../../widgets/AppInput/AppInput';
import { Formik, Field } from 'formik';

const PlaceInput = ({ onAdd }) => {


  const validateFn = (value) => {
    return !(!!value.trim())

  };

  return (


      <Formik
        initialValues={{ place: '' }}
        onSubmit={() => { }}
      >
        {
          ({ values, errors, touched, setFieldTouched, isValid }) => (
            <React.Fragment>


              <Field
                name="place"
                validate={validateFn}
              >
                {({ field: { onChange, value: { place } } }) => <AppInput
                  autoCapitalize="none"
                  value={place}
                  onChangeText={onChange('place')}
                  placeholder="Place Name"
                  error={errors.place && touched.place}
                  onBlur={() => setFieldTouched('place')}
                />
                }

              </Field>
              {
                errors.place && touched.place && <View>
                  <Text>A name is required</Text>
                </View>
              }

              <View style={styles.button}>
                <Button disabled={!isValid} onPress={onAdd} title="Share" />
              </View>
            </React.Fragment>
          )
        }


      </Formik>



  );
}

export default PlaceInput;




const styles = StyleSheet.create({
  button: {
    margin: 8
  }

})
