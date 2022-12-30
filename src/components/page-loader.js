import { View, Text, Image } from 'react-native'
import React from 'react'

export default function PageLoader() {
  return (
    <View>
      <Image
        style={{
          height: '50%',
          width: '50%'
        }}
        source={require('../assets/images/loader.gif')}

      />
    </View>
  )
}