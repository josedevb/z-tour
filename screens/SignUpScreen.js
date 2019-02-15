import React from 'react';
import {
  TextInput,
  Button,
  StyleSheet,
  View,
  Text,
} from 'react-native';

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

  signUpNext = () => this.props.navigation.navigate('SignUpComplete')

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.registerButtonContainer}>
          <Text style={styles.iconText}>Z-TOUR</Text>
          <Button color="black" title="INICIAR SESION" onPress={this.login} />
        </View>
        <View style={styles.inputsContainer}>
          <TextInput
            placeholder="Nombre"
            placeholderTextColor="#fff"
            style={styles.textInput}
            onChangeText={name => this.setState({name})}
            value={this.state.text}
            underlineColorAndroid="#fff"
          />
          <TextInput
            placeholder="Apellido"
            placeholderTextColor="#fff"
            style={styles.textInput}
            onChangeText={lastname => this.setState({lastname})}
            value={this.state.text}
            underlineColorAndroid="#fff"
          />
          <TextInput
            placeholder="Correo electornico"
            placeholderTextColor="#fff"
            style={styles.textInput}
            onChangeText={email => this.setState({email})}
            value={this.state.text}
            underlineColorAndroid="#fff"
          />
          <TextInput
            placeholder="N. de identificacion"
            placeholderTextColor="#fff"
            style={styles.textInput}
            onChangeText={dni => this.setState({dni})}
            value={this.state.text}
            underlineColorAndroid="#fff"
          />
          <TextInput
            placeholder="Telefono"
            placeholderTextColor="#fff"
            style={styles.textInput}
            onChangeText={phone => this.setState({phone})}
            value={this.state.text}
            underlineColorAndroid="#fff"
          />
        </View>
        <Button onPress={this.signUpNext} title="SIGUIENTE" color="black"/>
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
  inputsContainer: {
    flex: 0.5,
    paddingHorizontal: 30,
    justifyContent: 'space-around',
  },
  textInput: {
    height: 40,
    color: '#fff',
  },
});