import React from 'react';
import {
  TextInput,
  Button,
  StyleSheet,
  View,
  Text,
  Image,
  ActivityIndicator
} from 'react-native';
import { auth } from '../config/firebase';

export default class SignUpScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loading: false,
    };
  }

  login = () => this.props.navigation.navigate('Auth')

  signup = () => {

  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.registerButtonContainer}>
          <Text style={styles.iconText}>Z-TOUR</Text>
          <Button color="black" title="INICIAR SESION" onPress={this.login} />
        </View>
        <View style={styles.greetingsContainer}>
          <Image style={styles.backButton} source={require('../assets/images/icons8-izquierda-en-cuadrado-480.png')} />
          <Text style={styles.greetingsText}>Hola, Usuario</Text>
        </View>
        <View style={styles.inputsContainer}>
          <TextInput
            placeholder="Contraseña"
            placeholderTextColor="#fff"
            style={styles.textInput}
            onChangeText={email => this.setState({email})}
            value={this.state.text}
            underlineColorAndroid="#fff"
          />
          <TextInput
            placeholder="Respuesta secreta"
            placeholderTextColor="#fff"
            style={styles.textInput}
            onChangeText={lastname => this.setState({lastname})}
            value={this.state.text}
            underlineColorAndroid="#fff"
          />
        </View>
        <Button onPress={this.signup} title="LISTO" color="black"/>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#042777',
    paddingVertical: 60,
    paddingHorizontal: 30,
    justifyContent: 'space-between',
  },
  registerButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  greetingsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  greetingsText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  inputsContainer: {
    flex: 0.5,
    paddingHorizontal: 30,
    justifyContent: 'space-around',
  },
  textInput: {
    height: 40,
    color: '#fff',
  },
  backButton: {
    width: 50,
    height: 50,
  }
});