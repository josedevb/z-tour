import React from 'react';
import {
  TextInput,
  Button,
  StyleSheet,
  View,
  Text,
  Image,
  ActivityIndicator,
} from 'react-native';
import { auth } from '../config/firebase';

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
    const { email, password } = this.state;
    this.setState({ loading: true });
    auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      this.setState({ loading: false });
      this.props.navigation.navigate('App')
    })
    .catch(e => {
      if(e.code === "auth/invalid-email") alert('Email invalido')
      if(e.code === "auth/user-not-found") alert('Usuario no encontrado')
      if(e.code === "auth/wrong-password") alert('Email o contraseña equivocada')
      this.setState({ loading: false });
    })
  }

  forgetPassword = () => this.props.navigation.navigate('ForgetPassword');

  signup = () => this.props.navigation.navigate('SignUp');

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.registerButtonContainer}>
          <Button color="black" title="Registro" onPress={this.signup} />
        </View>
        <View style={styles.logo}>
          <Image style={styles.icon} source={require('../assets/images/ztour.png')}/>
          <Text style={styles.iconText} >Z-TOUR</Text>
        </View>
        <View style={styles.inputsContainer}>
          <TextInput
            placeholder="Email"
            placeholderTextColor="#fff"
            style={styles.textInput}
            onChangeText={email => this.setState({email})}
            value={this.state.text}
            underlineColorAndroid="#fff"
          />
          <TextInput 
            placeholder="Contraseña"
            placeholderTextColor="#fff"
            style={styles.textInput}
            onChangeText={password => this.setState({password})}
            value={this.state.text}
            underlineColorAndroid="#fff"
          />
          <Button onPress={this.forgetPassword} title="OLVIDE MI CONTRASEÑA" color="black"/>
        </View>
        { !this.state.loading ?
            <Button onPress={this.login} title="INICIAR SESION" color="black"/>
          : <ActivityIndicator color="black"/>
        }
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#042777',
    paddingVertical: 60,
    paddingHorizontal: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
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
});