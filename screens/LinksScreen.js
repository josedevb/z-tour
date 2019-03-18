import React from 'react';
import { ScrollView, StyleSheet, View, Image, Text, ImageBackground, ActivityIndicator } from 'react-native';
import { auth, database } from '../config/firebase';

export default class AchievementScreen extends React.Component {
  static navigationOptions = {
    title: null,
    header: null,
  };

  state = {
    hola: null,
  }

  componentDidMount() {
    let userId = auth.currentUser.uid;
    let ref = database.ref("usuario/" + userId);
    ref.once("value")
      .then((snapshot) => {
        this.setState({
          getDataBase1: snapshot.val(),
          userId,
        })
      })
    console.log(this.state);

  }

  posicion = (num) => {

  }

  render() {
    return (
      <ImageBackground
        source={require('../assets/icons/home.png')}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.container}>
          {this.state.getDataBase1 ?
            <View>
              <Text style={styles.getStartedText}>LOGROS:</Text>
              <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                <View>
                  <View style={styles.cuadroLogros1}>
                    <ImageBackground
                      source={require('../assets/images/lugar1.jpg')}
                      style={styles.background2}
                      resizeMode="cover"
                    >
                      <View style={this.state.getDataBase1.logros3[0] ? styles.opacity2 : styles.opacity1}>
                        <View>
                          <Text style={styles.texto}>
                            Basílica de Nuestra Señora de Chiquinquirá.
                  </Text>
                        </View>
                        <View>
                          {this.state.getDataBase1.logros3[0] ?
                            <Image style={styles.starImages} style={{ width: 25, height: 25 }} source={require('../assets/images/icons8-estrella-relleno-480.png')} />
                            :
                            <Image style={styles.starImages} style={{ width: 25, height: 25 }} source={require('../assets/images/icons8-estrella-480.png')} />
                          }
                        </View>
                      </View>
                    </ImageBackground>
                  </View>
                  <View style={styles.cuadroLogros1}>
                    <ImageBackground
                      source={require('../assets/images/lugar2.jpg')}
                      style={styles.background2}
                      resizeMode="cover"
                    >
                      <View style={this.state.getDataBase1.logros3[0] ? styles.opacity2 : styles.opacity1}>
                        <View>
                          <Text style={styles.texto}>
                            Calle Carabobo de El Saladillo.
                  </Text>
                        </View>
                        <View>
                          {this.state.getDataBase1.logros3[0] ?
                            <Image style={styles.starImages} style={{ width: 25, height: 25 }} source={require('../assets/images/icons8-estrella-relleno-480.png')} />
                            :
                            <Image style={styles.starImages} style={{ width: 25, height: 25 }} source={require('../assets/images/icons8-estrella-480.png')} />
                          }
                        </View>
                      </View>
                    </ImageBackground>
                  </View>
                  <View style={styles.cuadroLogros1}>
                    <ImageBackground
                      source={require('../assets/images/lugar3.jpg')}
                      style={styles.background2}
                      resizeMode="cover"
                    >
                      <View style={this.state.getDataBase1.logros3[0] ? styles.opacity2 : styles.opacity1}>
                        <View>
                          <Text style={styles.texto}>
                            El Convento de San Francisco de Asís.
                  </Text>
                        </View>
                        <View>
                          {this.state.getDataBase1.logros3[0] ?
                            <Image style={styles.starImages} style={{ width: 25, height: 25 }} source={require('../assets/images/icons8-estrella-relleno-480.png')} />
                            :
                            <Image style={styles.starImages} style={{ width: 25, height: 25 }} source={require('../assets/images/icons8-estrella-480.png')} />
                          }
                        </View>
                      </View>
                    </ImageBackground>
                  </View>
                  <View style={styles.cuadroLogros1}>
                    <ImageBackground
                      source={require('../assets/images/lugar4.jpeg')}
                      style={styles.background2}
                      resizeMode="cover"
                    >
                      <View style={this.state.getDataBase1.logros3[0] ? styles.opacity2 : styles.opacity1}>
                        <View>
                          <Text style={styles.texto}>
                            Iglesia de Santa Lucía.
                     </Text>
                        </View>
                        <View>
                          {this.state.getDataBase1.logros3[0] ?
                            <Image style={styles.starImages} style={{ width: 25, height: 25 }} source={require('../assets/images/icons8-estrella-relleno-480.png')} />
                            :
                            <Image style={styles.starImages} style={{ width: 25, height: 25 }} source={require('../assets/images/icons8-estrella-480.png')} />
                          }
                        </View>
                      </View>
                    </ImageBackground>
                  </View>
                  <View style={styles.cuadroLogros1}>
                    <ImageBackground
                      source={require('../assets/images/lugar5.jpg')}
                      style={styles.background2}
                      resizeMode="cover"
                    >
                      <View style={this.state.getDataBase1.logros3[0] ? styles.opacity2 : styles.opacity1}>
                        <View>
                          <Text style={styles.texto}>
                            La casa de la Capitulación.
                     </Text>
                        </View>
                        <View>
                          {this.state.getDataBase1.logros3[0] ?
                            <Image style={styles.starImages} style={{ width: 25, height: 25 }} source={require('../assets/images/icons8-estrella-relleno-480.png')} />
                            :
                            <Image style={styles.starImages} style={{ width: 25, height: 25 }} source={require('../assets/images/icons8-estrella-480.png')} />
                          }
                        </View>
                      </View>
                    </ImageBackground>
                  </View>
                  <View style={styles.cuadroLogros1}>
                    <ImageBackground
                      source={require('../assets/images/lugar6.jpg')}
                      style={styles.background2}
                      resizeMode="cover"
                    >
                      <View style={this.state.getDataBase1.logros3[0] ? styles.opacity2 : styles.opacity1}>
                        <View>
                          <Text style={styles.texto}>
                            Parque Vereda del Lago.
                     </Text>
                        </View>
                        <View>
                          {this.state.getDataBase1.logros3[0] ?
                            <Image style={styles.starImages} style={{ width: 25, height: 25 }} source={require('../assets/images/icons8-estrella-relleno-480.png')} />
                            :
                            <Image style={styles.starImages} style={{ width: 25, height: 25 }} source={require('../assets/images/icons8-estrella-480.png')} />
                          }
                        </View>
                      </View>
                    </ImageBackground>
                  </View>
                  <View style={styles.cuadroLogros1}>
                    <ImageBackground
                      source={require('../assets/images/lugar7.png')}
                      style={styles.background2}
                      resizeMode="cover"
                    >
                      <View style={this.state.getDataBase1.logros3[0] ? styles.opacity2 : styles.opacity1}>
                        <View>
                          <Text style={styles.texto}>
                            Plaza del Buen Maestro.
                     </Text>
                        </View>
                        <View>
                          {this.state.getDataBase1.logros3[0] ?
                            <Image style={styles.starImages} style={{ width: 25, height: 25 }} source={require('../assets/images/icons8-estrella-relleno-480.png')} />
                            :
                            <Image style={styles.starImages} style={{ width: 25, height: 25 }} source={require('../assets/images/icons8-estrella-480.png')} />
                          }
                        </View>
                      </View>
                    </ImageBackground>
                  </View>
                  <View style={styles.cuadroLogros1}>
                    <ImageBackground
                      source={require('../assets/images/lugar8.jpg')}
                      style={styles.background2}
                      resizeMode="cover"
                    >
                      <View style={this.state.getDataBase1.logros3[0] ? styles.opacity2 : styles.opacity1}>
                        <View>
                          <Text style={styles.texto}>
                            Plaza y Monumento a la Chinita.
                     </Text>
                        </View>
                        <View>
                          {this.state.getDataBase1.logros3[0] ?
                            <Image style={styles.starImages} style={{ width: 25, height: 25 }} source={require('../assets/images/icons8-estrella-relleno-480.png')} />
                            :
                            <Image style={styles.starImages} style={{ width: 25, height: 25 }} source={require('../assets/images/icons8-estrella-480.png')} />
                          }
                        </View>
                      </View>
                    </ImageBackground>
                  </View>
                  <View style={styles.cuadroLogros1}>
                    <ImageBackground
                      source={require('../assets/images/lugar9.png')}
                      style={styles.background2}
                      resizeMode="cover"
                    >
                      <View style={this.state.getDataBase1.logros3[0] ? styles.opacity2 : styles.opacity1}>
                        <View>
                          <Text style={styles.texto}>
                            Puente General Rafael Urdaneta.
                     </Text>
                        </View>
                        <View>
                          {this.state.getDataBase1.logros3[0] ?
                            <Image style={styles.starImages} style={{ width: 25, height: 25 }} source={require('../assets/images/icons8-estrella-relleno-480.png')} />
                            :
                            <Image style={styles.starImages} style={{ width: 25, height: 25 }} source={require('../assets/images/icons8-estrella-480.png')} />
                          }
                        </View>
                      </View>
                    </ImageBackground>
                  </View>
                  <View style={styles.cuadroLogros1}>
                    <ImageBackground
                      source={require('../assets/images/lugar10.jpg')}
                      style={styles.background2}
                      resizeMode="cover"
                    >
                      <View style={this.state.getDataBase1.logros3[0] ? styles.opacity2 : styles.opacity1}>
                        <View>
                          <Text style={styles.texto}>
                            Estadio José Encarnación Romero.
                     </Text>
                        </View>
                        <View>
                          {this.state.getDataBase1.logros3[0] ?
                            <Image style={styles.starImages} style={{ width: 25, height: 25 }} source={require('../assets/images/icons8-estrella-relleno-480.png')} />
                            :
                            <Image style={styles.starImages} style={{ width: 25, height: 25 }} source={require('../assets/images/icons8-estrella-480.png')} />
                          }
                        </View>
                      </View>
                    </ImageBackground>
                  </View>
                </View>
              </ScrollView>
            </View>
            : <View style={styles.activity}><ActivityIndicator size="large" color="white" /></View>}
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
    paddingVertical: 80,
    paddingHorizontal: 50,
  },

  cuadroLogros1: {
    width: '100%',
    height: 80,
    borderBottomWidth: 3,
    borderTopWidth: 3,
    borderColor: '#ffffff',
  },
  texto: {
    fontWeight: 'bold',
    color: '#ffffff',
    fontSize: 12,
    position: 'absolute',
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
});
