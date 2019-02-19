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
} from 'react-native';
import InputField from "../components/InputField";
import SeleccionarImagen from '../components/SeleccionarImagen'

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
      loading: false,
    };
  }

  login = () => this.props.navigation.navigate('Auth')

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
          <View style={styles.container}>
            <View style={styles.ViewiconText}>
              <Text style={styles.iconText}>Z-TOUR</Text>
              <TouchableWithoutFeedback onPress={this.login}>
                <View style={styles.buttons}>
                  <Text style={styles.buttonText}>Iniciar Sesion</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
            <View style={styles.inputsContainer}>
              <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                <SeleccionarImagen />
                <View style={{height:5,}}></View>
                <InputField
                  placeholder="Nombre"
                  autoCapitalize="words"
                  error={this.state.isNameCorrect}
                  style={styles.input}
                  focus={this.changeInputFocus}
                  ref={ref => this.nombre = ref}
                  icon={person}
                />
                <View style={{height:5,}}></View>
                <InputField
                  placeholder="Apellido"
                  autoCapitalize="words"
                  error={this.state.isNameCorrect}
                  style={styles.input}
                  focus={this.changeInputFocus}
                  ref={ref => this.nombre = ref}
                  icon={person}
                />
                <View style={{height:5,}}></View>
                <InputField
                  placeholder="Email"
                  keyboardType="email-address"
                  error={this.state.isEmailCorrect}
                  style={styles.input}
                  focus={this.changeInputFocus}
                  ref={ref => this.email = ref}
                  icon={email}
                />
                <View style={{height:5,}}></View>
                <InputField
                  placeholder="Cédula"
                  keyboardType='numeric'
                  error={this.state.isDniCorrect}
                  style={styles.input}
                  focus={this.changeInputFocus}
                  ref={ref => this.dni = ref}
                  icon={person}
                />
                <View style={{height:5,}}></View>
                <InputField
                  placeholder="Telefono"
                  keyboardType='phone-pad'
                  error={this.state.isPhoneCorrect}
                  style={styles.input}
                  focus={this.changeInputFocus}
                  ref={ref => this.phone = ref}
                  icon={person}
                />
                <View style={{height:5,}}></View>
                <InputField
                  placeholder="Password"
                  error={this.state.isPasswordCorrect}
                  style={styles.input}
                  focus={this.changeInputFocus}
                  ref={ref => this.password = ref}
                  secureTextEntry={true}
                  icon={password}
                />
                <View style={{height:5,}}></View>
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
                <View style={{height:5,}}></View>
              </ScrollView>
            </View>
            <Button onPress={this.signup} title="REGISTRARSE" color="black" />
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#fff',
    backgroundColor: 'rgba(0,0,0,0.7)',
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
    backgroundColor: '#303030',
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
});