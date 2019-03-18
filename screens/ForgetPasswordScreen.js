import React from 'react';
import {
  TextInput,
  Button,
  StyleSheet,
  View,
  Text,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  ImageBackground,
  TouchableWithoutFeedback,
} from 'react-native';
import { auth } from '../config/firebase';
import InputField from "../components/InputField";
import { w, h, totalSize } from '../api/Dimensions';
import Firebase from './Firebase';
const email = require('../assets/icons/email.png');

export default class ForgetPasswordScreen extends React.Component {

  static navigationOptions = {
    header: null,
  };

  state = {
    isEmailCorrect: false,
  };

  sendEmail = () => {
    const email = this.email.getInputValue();
    this.setState({
      isEmailCorrect: email === '',
    }, () => {
      if (email !== '') {
        this.sendEmailWithPassword(email);
      } else {
        alert('Enter correct e-mail address.')
      }
    });
  };

  sendEmailWithPassword = (email) => {
    Firebase.sendEmailWithPassword(email)
      .then(result => {
        if (result) {
          alert('Password nuevo enviado al correo.')
          this.props.navigation.navigate('Auth')();
        }
      });
  };

  onFocusChanged = () => {
    this.setState({ isEmailCorrect: this.email.getInputValue() === '' });
  };

  render() {
    return (
      <ImageBackground
        source={require('../assets/icons/forgotPassword.png')}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.container}>
          <View style={styles.ViewiconText}>
            <Text style={styles.iconText}>Z-TOUR</Text>
          </View>
          <View style={styles.contenido}>
            <Text style={styles.forgot}>Olvidaste tu Contraseña?</Text>
            <InputField
              placeholder="Email"
              keyboardType="email-address"
              error={this.state.isEmailCorrect}
              returnKeyType="done"
              blurOnSubmit={true}
              focus={this.changeInputFocus}
              ref={ref => this.email = ref}
              icon={email}
            />
            <TouchableWithoutFeedback onPress={() => this.sendEmail()}>
              <View style={styles.buttons}>
                <Text style={styles.buttonText}>Enviar al Correo</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Auth')}>
              <View style={styles.buttons}>
                <Text style={styles.buttonText}>{'<'} Regresar al Login</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171F33',
    opacity: 0.8,
  },
  contenido: {
    flex: 9,
    paddingVertical: 60,
    paddingHorizontal: 40,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  registerButtonContainer: {
    flex: 0.1,
    alignSelf: 'flex-end',
  },
  logo: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 250,
    height: 250,
  },
  iconText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  inputsContainer: {
    flex: 0.3,
    justifyContent: 'space-around',
  },
  textInput: {
    height: 40,
    color: '#fff',
  },
  background: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
  iconText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#fff',
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginTop: 25,
  },
  ViewiconText: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#303030',
    height: 53.3,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginBottom: 20,
    width: '85%',
    marginTop: 20,
    borderWidth: 1,
    borderColor: 'white',
    opacity: 0.8
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  forgot: {
    color: '#ffffffEE',
    textAlign: 'center',
    fontSize: totalSize(2),
    fontWeight: '600',
  },
  KeyboardAvoid: {
    justifyContent: 'space-between',
    flex: 1,
  },
});