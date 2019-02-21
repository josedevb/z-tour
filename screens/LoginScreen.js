import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  TouchableWithoutFeedback,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import { auth } from '../config/firebase';
import InputField from "../components/InputField";
import { w, h, totalSize } from '../api/Dimensions';

const maracaiboLogo = require('../assets/images/Saladillo.jpg');
const ztour = require('../assets/images/ztour.png');
const email = require('../assets/icons/email.png');
const password = require('../assets/icons/password.png');

export default class LoginScreen extends React.Component {
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

  login = () => {
    // const { email, password } = this.state;
    const email = this.email.getInputValue();
    const password = this.password.getInputValue();
    this.setState({ loading: true });
    auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ loading: false });
        this.props.navigation.navigate('App')
      })
      .catch(e => {
        if (e.code === "auth/invalid-email") alert('Email invalido')
        if (e.code === "auth/user-not-found") alert('Usuario no encontrado')
        if (e.code === "auth/wrong-password") alert('Email o contraseña equivocada')
        this.setState({ loading: false });
      })
  }

  forgetPassword = () => this.props.navigation.navigate('ForgetPassword');

  signup = () => this.props.navigation.navigate('SignUp');

  render() {
    return (
      <ImageBackground
        source={require('../assets/icons/home.png')}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.container}>
          <View style={styles.ViewiconText}>
            <Text style={styles.iconText}>Z-TOUR</Text>
          </View>
          <View style={styles.ViewRest} >
            <View style={styles.icon}></View>
            <Image style={styles.icon2} resizeMode="contain" source={ztour} />
            <InputField
              placeholder="Email"
              keyboardType="email-address"
              style={styles.email}
              error={this.state.isEmailCorrect}
              focus={this.changeInputFocus}
              ref={ref => this.email = ref}
              icon={email}
            />
            <InputField
              placeholder="Password"
              returnKeyType="done"
              secureTextEntry={true}
              blurOnSubmit={true}
              error={this.state.isPasswordCorrect}
              ref={ref => this.password = ref}
              focus={this.changeInputFocus}
              icon={password}
            />
            {!this.state.loading ?
              <TouchableWithoutFeedback onPress={this.login}>
                <View style={styles.buttons}>
                  <Text style={styles.buttonText}>Iniciar Sesion</Text>
                </View>
              </TouchableWithoutFeedback>
              : <ActivityIndicator color="white" />
            }
            <View style={styles.textContainer}>
              <TouchableOpacity onPress={this.signup} style={styles.touchable} activeOpacity={0.6}>
                <Text style={styles.createAccount}>Crear una cuenta.</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.forgetPassword} style={styles.touchable} activeOpacity={0.6}>
                <Text style={styles.forgotPassword}>¿Olvidó su contraseña?</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>

    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171F33',
    opacity: 0.8,
  },
  icon: {
    width: Dimensions.get('window').width <= 360 ? w(40) : w(50),
    height: h(25),
    marginTop: h(10),
    marginBottom: h(7),
    opacity: 0.4,
    borderRadius: 100,
    backgroundColor: 'white',

  },
  icon2: {
    width: w(40),
    height: h(25),
    marginTop: h(10),
    marginBottom: h(7),
    position: 'absolute',
  },
  icon3: {
    width: w(20),
    height: h(10),
    marginTop: h(10),
    marginBottom: h(7),
    borderRadius: 50,
  },
  textContainer: {
    width: w(100),
    flexDirection: 'row',
    paddingVertical: 15,
  },
  email: {
    marginBottom: h(4.5),
  },
  touchable: {
    flex: 0.5,
  },
  createAccount: {
    color: '#ffffffEE',
    textAlign: 'center',
    fontSize: totalSize(2),
    fontWeight: '600',
  },
  forgotPassword: {
    color: '#ffffffEE',
    textAlign: 'center',
    fontSize: totalSize(2),
    fontWeight: '600',
  },
  background: {
    width: '100%',
    height: '100%',
    flex: 1
  },
  iconText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    borderColor: '#fff',
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginTop: 25,
  },
  ViewiconText: {
    flex: 0.5,
    alignItems: 'flex-start',
    paddingHorizontal: 20,
  },
  ViewRest: {
    flex: 20,
    alignItems: 'center',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    height: Dimensions.get('window').height <= 640 ? 40 : 53.3,
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
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});
