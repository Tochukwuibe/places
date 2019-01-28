import React from 'react';
import { View, StyleSheet, Button, Text } from 'react-native'
import AppInput from '../../widgets/AppInput/AppInput';
import { Formik, Field } from 'formik';

const PlaceInput = ({ onAdd, disabled }) => {


  const validateFn = (value) => {
    return !(!!value.trim())

  };
  const form = { place: '' }

  return (


    <Formik
      initialValues={form}
      onSubmit={(values, {resetForm}) => {
        onAdd(values.place);
        resetForm(form);
      }}
    >
      {
        ({ values, errors, touched, setFieldTouched, isValid, handleSubmit}) => (
          <React.Fragment>


            <Field
              name="place"
              validate={validateFn}
            >
              {({ field: { onChange } }) => <AppInput
                autoCapitalize="none"
                value={values.place}
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
              <Button disabled={!isValid ||  disabled} onPress={handleSubmit} title="Share" />
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
