import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TextInput, KeyboardAvoidingView} from 'react-native';

export default function App() {
  return (
    <View style={styles.container} behavior='padding'>
      <StatusBar style='auto'/>
      <View style={{flex:1, backgroundColor: '#788b28', display:'flex',}}>
        <Text style={styles.bartitle}>Example 1</Text>
      </View>
      <Image source={require('./assets/icon.png')} style={styles.images}/>
      <View style={styles.buttonlayout}>
        <View style={{flex:1, display:'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center',}}>
          <Button title="Button 1" color="#788b28"/>
          <Button title="Button 2" color="#788b28"/>
        </View>
        <View style={{flex:1, display:'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center',}}>
          <Button title="Button 3" color="#788b28"/>
          <Button title="Button 4" color="#788b28"/>
        </View>
      </View>
      <View style={{flex:4, backgroundColor: 'white'}}>
        <KeyboardAvoidingView behavior='height' style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
          <Text style={{paddingTop: 4}}>E-mail : </Text>
          <TextInput placeholder='Enter a valid e-mail'></TextInput>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  images:{
    flex:2,
    aspectRatio: 1,
    alignSelf: 'center',
    margin : 10,
  },

  bartitle:{
    position: 'absolute',
    bottom: "15%",
    left: "5%",
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },

  buttonlayout:{
    flex: 2,
  },
});
