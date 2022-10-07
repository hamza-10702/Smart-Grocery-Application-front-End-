import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './src/Navigation';
// import SideDrawer from './src/screen/SideDrawer'

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <View style={{flex: 1}}> */}

      <NavigationContainer>
        {/* <SideDrawer/> */}
        <RootNavigation />
      </NavigationContainer>
      {/* </View> */}
    </SafeAreaView>
  );
};

export default App;
