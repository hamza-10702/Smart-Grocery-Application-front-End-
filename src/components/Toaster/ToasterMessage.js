 
 const toastConfig  = {
    success: props => (
      <BaseToast
        {...props}
        style={{borderLeftColor: 'pink'}}
        contentContainerStyle={{paddingHorizontal: 15}}
        text1Style={{
          fontSize: 15,
          fontWeight: '400',
        }}
      />
    ),

    error: props => (
      <ErrorToast
        {...props}
        text1Style={{
          fontSize: 17,
        }}
        text2Style={{
          fontSize: 15,
        }}
      />
    ),

    // tomatoToast: ({text1, props}) => (
    //   <View style={{height: 50, width: '80%', backgroundColor: 'tomato', borderRadius: 50}}>
    //     <Text>{text1}</Text>
    //     <Text>{props.uuid}</Text>
    //   </View>
    // ),

    customError: ({text, props}) => (
      <View
        style={{
          height: 50,
          width: '80%',
          backgroundColor: 'yellow',
          borderRadius: 50,
        }}></View>
    ),
    customSuccess: ({text, props}) => (
      <View
        style={{
          height: 50,
          width: '80%',
          backgroundColor: 'red',
          borderRadius: 50,
        }}>
        <Text style = {{
            color: 'white',
            fontWeight: '700',
            alignSelf: 'center',
            paddingVertical: 12
        }}>{props.uuid}</Text>
      </View>
    ),
  };

  export default toastConfig;