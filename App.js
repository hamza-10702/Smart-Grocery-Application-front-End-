import React from 'react';
import {SafeAreaView , View} from 'react-native';
import Authentication from './src/screen/Authentication';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Authentication />
      </View>
    </SafeAreaView>
  );
};

export default App;
