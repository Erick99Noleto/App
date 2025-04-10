import {useState} from 'react';
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';

let imagemLogo = "https://static.vecteezy.com/ti/vetor-gratis/p3/2027488-vector-illustration-of-sign-in-page-login-website-page-and-form-people-with-smartphone-screen-vetor.jpg";

function App() {
  {/*const [name, setName] = useState('');
  const [input, setInput] = useState('');

  function saveInfo(){
    if(input == ''){
      alert('Preencha o campo')
      return
    }

    setName(input)
  }*/}

  return (
    <View style={styles.view}>
      <Image source={{uri: imagemLogo}} style={styles.imagemLogo}/>
      <TextInput style={styles.textInput} placeholder='Telefone, nome de usuário ou email'></TextInput>
      <TextInput style={styles.textInput} placeholder='Senha'></TextInput>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
      <Text style={styles.recoverPassword}>Esqueceu a senha?</Text>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  imagemLogo: {
    width: 100,
    height: 150
  },
  textInput:{
    marginTop: 12,
    width: '75%',
    padding: 15,
    borderRadius: 8.5,
    backgroundColor: '#f3f2f7',
  },
  button:{
    marginTop: 12,
    width: '75%',
    padding: 15,
    borderRadius: 8.5,
    backgroundColor: '#007aff',
  },
  buttonText:{
    textAlign: 'center',
    color: '#fff'
  },
  recoverPassword:{
    marginTop: 20,
    width: '75%',
    textAlign: 'right',
    color: '#007aff'
  }
});
