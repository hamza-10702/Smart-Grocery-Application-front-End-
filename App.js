import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import Authentication from './src/screen/Authentication';

const App = () => {
  return (
    <SafeAreaView style = {{flex: 1}}>
     
        <Authentication />
       
     
     </SafeAreaView>
  );
};

export default App;
