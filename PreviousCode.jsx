<View style={styles.container}>
      <Text>Welcome to New App</Text>
      <Text>hi {name}</Text>
      <View style={{backgroundColor:'orange',width:'100%'}}>
          <Text>This is me</Text>
      </View>
      <TouchableOpacity onPress={()=>console.log("h")}>
        <Text>Click Me</Text>
      </TouchableOpacity>
      <TextInput placeholder='Enter name' value={name} onChange={(e)=>setName(e.nativeEvent.text)}/>
      <TouchableOpacity onPress={()=>Alert.alert('Congratulations','submitted',[
        {
          text:'Cancel',
          onPress:()=>Alert.alert('Cancel pressed'),
          style:'cancel'
        }
      ])}>
        <Text>Submit</Text>
      </TouchableOpacity>


      <TouchableOpacity onPress={()=>Vibration.vibrate()} style={{backgroundColor:'green',padding:5}}>
        <Text>Vibrate</Text>
      </TouchableOpacity>
      <StatusBar backgroundColor='orange' style='light' />
    </View>