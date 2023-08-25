import React, {useState} from 'react';
import { Button, StyleSheet, Text, View, TextInput, Image, ScrollView } from 'react-native';

import { Amplify, API } from 'aws-amplify';
import {Picker} from '@react-native-picker/picker';
import {
  Authenticator,
  useAuthenticator,
  useTheme,
} from '@aws-amplify/ui-react-native';

import Parents from './Parents'
import MyAppLogo from '../components/Logo';

function SignOutButton() {
  const { signOut } = useAuthenticator();
  return <Button onPress={signOut} title="Sign Out" />;
}

function App({ navigation }) {
  const {
    tokens: { colors },
  } = useTheme();
  const apiName = 'parents'; // replace this with your api name.
  const path = '/parents';
  const [selectedLanguage, setSelectedLanguage] = useState();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    region: '',
    country: ''
  });

  const handleChange = (field, value) => {
    setFormData({...formData, [field]: value});
  };

  const handleSubmit = () => {
    // Perform form submission logic here
    // https://uybltsr7wg.execute-api.us-east-1.amazonaws.com/dev/parents
    let parent_id = 'KTS-C0002'
    const {name, email, address, city, region, country} = formData;
    const myInit = {
      body: {
        parent_id: parent_id,
        name: name,
        email: email,
        address: address,
        city: city,
        region: region,
        country: country,

      }, // replace this with attributes you need
      headers: {} // OPTIONAL
    };

    API.post(apiName, path, myInit)
      .then((response) => {
        // Add your code here
        console.log("POST on DB")
        navigation.navigate("children")
      })
      .catch((error) => {
        console.log(error.response);
      });
    console.log(formData);
  };

  return (
    <Authenticator.Provider>
      <Authenticator
        // will wrap every subcomponent
        Container={(props) => (
          // reuse default `Container` and apply custom background
          <Authenticator.Container
            {...props}
          />
        )}
        // will render on every subcomponent
        Header={MyAppLogo}
      >

      <Parents />


      </Authenticator>
    </Authenticator.Provider>
  );
}

const style = StyleSheet.create({
  container: { flex: 1, marginTop: 26,},
});

const styles = StyleSheet.create({
    textField: {
    fontSize: 18,
    marginBottom: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderRadius: '2',
    borderWidth: 2,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  imageContainer:{
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center'
    },
    image:{
    width:150,
    height:150
    },
    label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default App;