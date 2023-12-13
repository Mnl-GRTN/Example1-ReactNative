import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TextInput, KeyboardAvoidingView, ScrollView} from 'react-native';

export default function App() {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior='padding'>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={{ backgroundColor: '#788b28', padding: 20 }}>
            <Text style={styles.bartitle}>Example 1</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Image source={require('./assets/icon.png')} style={styles.images} />
            <View style={styles.buttonlayout}>
              <View style={styles.buttonRow}>
                <Button title="Button 1" color="#788b28" />
                <Button title="Button 2" color="#788b28" />
              </View>
              <View style={styles.buttonRow}>
                <Button title="Button 3" color="#788b28" />
                <Button title="Button 4" color="#788b28" />
              </View>
            </View>
            <View style={{width:'100%', flexDirection: 'row', justifyContent: 'flex-start', marginTop: 20}}>
              <Text style={{ paddingLeft: 16 }}>E-mail : </Text>
              <View style={{ flex: 1, alignItems:'center' }}>
                <TextInput
                  placeholder='Enter a valid e-mail'
                  style={{
                    width:'70%',
                    borderBottomColor: '#788b28',
                    borderBottomWidth: 1,
                    color: 'grey',}}/>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  images: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    margin: 20,
  },
  bartitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonlayout: {
    marginTop: 20,
    width: '100%',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },
});

