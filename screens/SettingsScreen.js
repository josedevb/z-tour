import React from 'react';
import { ScrollView, StyleSheet, View, Button, Text, ImageBackground, ActivityIndicator,Image } from 'react-native';
import { auth, database } from '../config/firebase';
import InputField from "../components/InputField";

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: null,
    header: null,
  };

  state = {
    motivo: '',
    mensaje: '',
    motivoCorrect: false,
    mensajeCorrect: false,
    loading: true,
  }

  contactForm = () => {
    this.setState({ loading: false });
    let userId = auth.currentUser.uid;
    const motivo = this.motivo.getInputValue();
    const mensaje = this.mensaje.getInputValue();

    this.setState({
      motivoCorrect: motivo === '',
      mensajeCorrect: mensaje === '',
    }, () => {
      if (motivo !== '' && mensaje !== '') {
        const data = {
          'userId': userId,
          'motivo': motivo,
          'mensaje': mensaje,
        };
        this.saveContactForm(data);
      } else {
        this.setState({ loading: true });
        alert('Existen Campos Vacios.');
      }
    })
  }

  saveContactForm = (data) => {
    database.ref('MensajesUsuarios').push(data) // Hacemos referencia al método database de el SDK y hacemos referencia el nombre del objeto que contendrá nuestros registros y empujamos los nuevos envios de datos
      .then(function () {
        alert('mensaje enviado.'); 
        this.setState({ loading: true });// Si la petición es correcta y almaceno los datos mostramos un mensaje al usuario.
      })
      .catch(function () {
        alert('mensaje No enviado.'); 
        this.setState({ loading: true });// En caso de ocurrir un error le mostramos al usuario que ocurrió un error.
      });
  };

  render() {
    return (
      <ImageBackground
        source={require('../assets/icons/home.png')}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.container}>
          {this.state.loading ?
            (
              <View styles={styles.principal}>
                <Text style={styles.getStartedText}>Contáctanos:</Text>
                <View style={{ height: 20, }}></View>
                <Image style={styles.camStyles} source={require('../assets/icons/paper-plane.png')} />
                  <View>
                      <InputField
                        placeholder="Motivo del Mensaje"
                        autoCapitalize="words"
                        error={this.state.motivoCorrect}
                        style={styles.input}
                        focus={this.changeInputFocus}
                        ref={ref => this.motivo = ref}
                      />
                      <View style={{ height: 10, }}></View>
                      <InputField
                        placeholder="Mensaje..."
                        autoCapitalize="words"
                        error={this.state.mensajeCorrect}
                        style={styles.input}
                        focus={this.changeInputFocus}
                        ref={ref => this.mensaje = ref}
                      />
                    </View>
                    <View style={{ height: 20, }}></View>
                <Button onPress={this.contactForm} title="Enviar Mensaje" color="black" />
              </View>)
            : <View style={styles.activity}><ActivityIndicator size="large" color="white" /></View>}
        </View>
      </ImageBackground >
    );
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 5,
    justifyContent: 'space-around',
    backgroundColor: '#171F33',
    opacity: 0.8,
  },
  principal: {
    justifyContent: 'space-around',
  },
  cuadroLogros1: {
    borderWidth: 1,
    borderColor: '#ffffff',
    height: 12,
  },
  texto: {
    fontWeight: 'bold',
    color: '#ffffff',
    fontSize: 16,
    textShadowColor: 'black',
    textShadowOffset: { width: 5, height: 5 },
    textShadowRadius: 10,
  },
  texto2: {
    color: '#ffffff',
    fontSize: 14,
    textShadowColor: 'black',
    textShadowOffset: { width: 5, height: 5 },
    textShadowRadius: 10,
  },
  background2: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
  background: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
  opacity1: {
    flexDirection: 'row',
    backgroundColor: 'black',
    opacity: 0.9,
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  opacity2: {
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  getStartedText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#ffffff',
  },
  activity: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  starImages: {
    textShadowColor: 'black',
    textShadowOffset: { width: 5, height: 5 },
    textShadowRadius: 10,
  },
  camStyles: {
    width: 150,
    height: 150,
},
});