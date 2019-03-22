import React from 'react';
import {
  TextInput,
  Button,
  StyleSheet,
  View,
  Text,
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import InputField from "../components/InputField";
import { createFirebaseAccount } from '../config/firebase'
import { isLoading } from 'expo-font';

const email = require('../assets/icons/email.png');
const password = require('../assets/icons/password.png');
const repeat = require('../assets/icons/repeat.png');
const person = require('../assets/icons/person.png');

export default class SignUpScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      lastname: '',
      email: '',
      phone: '',
      dni: '',
      isNameCorrect: false,
      isLastNameCorrect: false,
      isEmailCorrect: false,
      isDniCorrect: false,
      isPasswordCorrect: false,
      isPhoneCorrect: false,
      isRepeatCorrect: false,
      isCreatingAccount: false,
      loading: false,
    };
  }

  login = () => this.props.navigation.navigate('Auth')

  createUserAccount = () => {
    this.setState({ loading: true });
    const name = this.name.getInputValue();
    const lastname = this.lastname.getInputValue();
    const email = this.email.getInputValue();

    const password = this.password.getInputValue();
    const repeat = this.repeat.getInputValue();

    this.setState({
      isNameCorrect: name === '',
      isLastNameCorrect: lastname === '',
      isEmailCorrect: email === '',
      isPasswordCorrect: password === '',
      isRepeatCorrect: repeat === '' || repeat !== password,
    }, () => {
      if (name !== '' && email !== '' && password !== '' && repeat !== '') {
        if (repeat !== password)
          { this.setState({ loading: false });
            alert('Las contraseñas no coinciden.')}
            else{ createFirebaseAccount(email, password, name, lastname)}
      } else {
        this.setState({ loading: false });
        alert('Existen Campos Vacios.');
      }
    })
  };

  createFireBaseAccount = (email, password, name, lastname) => {
    this.setState({ isCreatingAccount: true });
    createFirebaseAccount(email, password, name, lastname)
      .then(result => {
        if (result) {
          alert('Exito al crear la Cuenta.')
        }
        this.setState({ isCreatingAccount: false });
      });
  };

  signup = () => {

  }

  render() {
    return (
      <KeyboardAvoidingView
        behavior="padding"
        style={styles.KeyboardAvoid}
      >
        <ImageBackground
          source={require('../assets/icons/register.png')}
          style={styles.background}
          resizeMode="cover"
        >
          {this.state.loading ?
            <View style={styles.activity}><ActivityIndicator size="large" color="white" /></View>
            :
            <View style={styles.container}>
              <View style={styles.ViewiconText}>
                <Text style={styles.iconText}>Z-TOUR</Text>
              </View>
              <View style={styles.inputsContainer}>
                <TouchableWithoutFeedback onPress={this.login}>
                  <View style={styles.buttons}>
                    <Text style={styles.buttonText}>Regresar</Text>
                  </View>
                </TouchableWithoutFeedback>
                <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                  <View style={{ height: 5, }}></View>
                  <InputField
                    placeholder="Nombre"
                    autoCapitalize="words"
                    error={this.state.isNameCorrect}
                    style={styles.input}
                    focus={this.changeInputFocus}
                    ref={ref => this.name = ref}
                    icon={person}
                  />
                  <View style={{ height: 10, }}></View>
                  <InputField
                    placeholder="Apellido"
                    autoCapitalize="words"
                    error={this.state.isLastNameCorrect}
                    style={styles.input}
                    focus={this.changeInputFocus}
                    ref={ref => this.lastname = ref}
                    icon={person}
                  />
                  <View style={{ height: 10, }}></View>
                  <InputField
                    placeholder="Email"
                    keyboardType="email-address"
                    error={this.state.isEmailCorrect}
                    style={styles.input}
                    focus={this.changeInputFocus}
                    ref={ref => this.email = ref}
                    icon={email}
                  />
                  <View style={{ height: 10, }}></View>
                  <InputField
                    placeholder="Password"
                    error={this.state.isPasswordCorrect}
                    style={styles.input}
                    focus={this.changeInputFocus}
                    ref={ref => this.password = ref}
                    secureTextEntry={true}
                    icon={password}
                  />
                  <View style={{ height: 10, }}></View>
                  <InputField
                    placeholder="Repeat Password"
                    error={this.state.isRepeatCorrect}
                    style={styles.input}
                    secureTextEntry={true}
                    returnKeyType="done"
                    blurOnSubmit={true}
                    focus={this.changeInputFocus}
                    ref={ref => this.repeat = ref}
                    icon={repeat}
                  />
                  <View style={{ height: 10, }}></View>
                </ScrollView>
              </View>
              <Button onPress={this.createUserAccount} title="REGISTRARSE" color="black" />
            </View>
          }
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171F33',
    opacity: 0.8,
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
  inputsContainer: {
    flex: 1,
    paddingHorizontal: 30,
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
    fontSize: 20,
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
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
  },
  KeyboardAvoid: {
    backgroundColor: '#242656',
    justifyContent: 'space-between',
    flex: 1,
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    height: 53.3,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginBottom: 20,
    width: '40%',
    marginTop: 24,
    borderWidth: 1,
    borderColor: 'white',
  },
  buttonText: {
    color: 'white',
    fontSize: Dimensions.get('window').width <= 360 ? 15 : 20,
  },
  activity: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});