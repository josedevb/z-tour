import React from 'react';
import { Dimensions, Modal, ScrollView, StyleSheet, View, Image, Text, ImageBackground, ActivityIndicator, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { auth, database } from '../config/firebase';

export default class AchievementScreen extends React.Component {
  static navigationOptions = {
    title: null,
    header: null,
  };

  state = {
    hola: null,
    modalVisible: false,
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
      }).then(() => {
        var placesRef = database.ref(`achievements`);
        let vm = this;
        placesRef.once('value', function (snapshot) {
          if (snapshot.val() !== null) {
            vm.setState({
              achievement: snapshot.val(),
            });
          }
        }
        )
      }
      )
    console.log(this.state);

  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  aqui(key, num) {
    if (key) {
      if (num === 1)
        this.setState({
          descripcion: this.state.achievement.lugar1.descripcion,
          imagenLugar: this.state.achievement.lugar1.imagenLugar,
          likes: this.state.achievement.lugar1.likes,
          nombreLugar: this.state.achievement.lugar1.nombreLugar,
        });
      if (num === 2) {
        this.setState({
          descripcion: this.state.achievement.lugar2.descripcion,
          imagenLugar: this.state.achievement.lugar2.imagenLugar,
          likes: this.state.achievement.lugar2.likes,
          nombreLugar: this.state.achievement.lugar2.nombreLugar,
        });
      }
      if (num === 3) {
        this.setState({
          descripcion: this.state.achievement.lugar3.descripcion,
          imagenLugar: this.state.achievement.lugar3.imagenLugar,
          likes: this.state.achievement.lugar3.likes,
          nombreLugar: this.state.achievement.lugar3.nombreLugar,
        });
      }
      if (num === 4) {
        this.setState({
          descripcion: this.state.achievement.lugar4.descripcion,
          imagenLugar: this.state.achievement.lugar4.imagenLugar,
          likes: this.state.achievement.lugar4.likes,
          nombreLugar: this.state.achievement.lugar4.nombreLugar,
        });
      }
      if (num === 5) {
        this.setState({
          descripcion: this.state.achievement.lugar5.descripcion,
          imagenLugar: this.state.achievement.lugar5.imagenLugar,
          likes: this.state.achievement.lugar5.likes,
          nombreLugar: this.state.achievement.lugar5.nombreLugar,
        });
      }
      if (num === 6) {
        this.setState({
          descripcion: this.state.achievement.lugar6.descripcion,
          imagenLugar: this.state.achievement.lugar6.imagenLugar,
          likes: this.state.achievement.lugar6.likes,
          nombreLugar: this.state.achievement.lugar6.nombreLugar,
        });
      }
      if (num === 7) {
        this.setState({
          descripcion: this.state.achievement.lugar7.descripcion,
          imagenLugar: this.state.achievement.lugar7.imagenLugar,
          likes: this.state.achievement.lugar7.likes,
          nombreLugar: this.state.achievement.lugar7.nombreLugar,
        });
      }
      if (num === 8) {
        this.setState({
          descripcion: this.state.achievement.lugar8.descripcion,
          imagenLugar: this.state.achievement.lugar8.imagenLugar,
          likes: this.state.achievement.lugar8.likes,
          nombreLugar: this.state.achievement.lugar8.nombreLugar,
        });
      }
      if (num === 9) {
        this.setState({
          descripcion: this.state.achievement.lugar9.descripcion,
          imagenLugar: this.state.achievement.lugar9.imagenLugar,
          likes: this.state.achievement.lugar9.likes,
          nombreLugar: this.state.achievement.lugar9.nombreLugar,
        });
      }
      if (num === 10) {
        this.setState({
          descripcion: this.state.achievement.lugar10.descripcion,
          imagenLugar: this.state.achievement.lugar10.imagenLugar,
          likes: this.state.achievement.lugar10.likes,
          nombreLugar: this.state.achievement.lugar10.nombreLugar,
        });
      }
      this.setModalVisible(true)
    }
    else {
      alert("Desbloquea este logro para visualizar su contenido.")
    }

  }

  render() {
    return (
      <ImageBackground
        source={require('../assets/icons/home.png')}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.container}>
          <Modal
            animationType="slide"
            presentationStyle="pageSheet"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              alert('Modal has been closed.');
            }}>
            <View style={styles.container}>
              <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                <View style={styles.contentContainer}>
                  <View style={styles.container2}>
                    <Image resizeMode="cover" style={styles.image} source={{ uri: this.state.imagenLugar }} />
                  </View>
                  <View style={styles.container3}>
                    <Text style={styles.getStartedText}>
                      {this.state.nombreLugar}
                    </Text>
                  </View>
                  <View style={styles.container4}>
                    <Text style={styles.getStartedText2}>
                      Personas que le gusta el lugar: {this.state.likes}
                    </Text>
                  </View>
                  <View style={styles.container5}>
                    <Text>
                      {this.state.descripcion}
                    </Text>
                  </View>
                </View>
                <TouchableWithoutFeedback onPress={() => this.setModalVisible(!this.state.modalVisible)}>
                  <View style={styles.buttons}>
                    <Text style={styles.buttonText}>Regresar</Text>
                  </View>
                </TouchableWithoutFeedback>
              </ScrollView>
            </View>
          </Modal>
          {(this.state.getDataBase1 && this.state.achievement) ?
            <View>
              <Text style={styles.getStartedText3}>LOGROS:</Text>
              <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                <View>
                  <TouchableOpacity onPress={() => { this.aqui(this.state.getDataBase1.logros3[0], 1) }}>
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
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => { this.aqui(this.state.getDataBase1.logros3[1], 2) }}>
                    <View style={styles.cuadroLogros1}>
                      <ImageBackground
                        source={require('../assets/images/lugar2.jpg')}
                        style={styles.background2}
                        resizeMode="cover"
                      >
                        <View style={this.state.getDataBase1.logros3[1] ? styles.opacity2 : styles.opacity1}>
                          <View>
                            <Text style={styles.texto}>
                              Calle Carabobo de El Saladillo.
                  </Text>
                          </View>
                          <View>
                            {this.state.getDataBase1.logros3[1] ?
                              <Image style={styles.starImages} style={{ width: 25, height: 25 }} source={require('../assets/images/icons8-estrella-relleno-480.png')} />
                              :
                              <Image style={styles.starImages} style={{ width: 25, height: 25 }} source={require('../assets/images/icons8-estrella-480.png')} />
                            }
                          </View>
                        </View>
                      </ImageBackground>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => { this.aqui(this.state.getDataBase1.logros3[2], 3) }}>
                    <View style={styles.cuadroLogros1}>
                      <ImageBackground
                        source={require('../assets/images/lugar3.jpg')}
                        style={styles.background2}
                        resizeMode="cover"
                      >
                        <View style={this.state.getDataBase1.logros3[2] ? styles.opacity2 : styles.opacity1}>
                          <View>
                            <Text style={styles.texto}>
                              El Convento de San Francisco de Asís.
                  </Text>
                          </View>
                          <View>
                            {this.state.getDataBase1.logros3[2] ?
                              <Image style={styles.starImages} style={{ width: 25, height: 25 }} source={require('../assets/images/icons8-estrella-relleno-480.png')} />
                              :
                              <Image style={styles.starImages} style={{ width: 25, height: 25 }} source={require('../assets/images/icons8-estrella-480.png')} />
                            }
                          </View>
                        </View>
                      </ImageBackground>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => { this.aqui(this.state.getDataBase1.logros3[3], 4) }}>
                    <View style={styles.cuadroLogros1}>
                      <ImageBackground
                        source={require('../assets/images/lugar4.jpeg')}
                        style={styles.background2}
                        resizeMode="cover"
                      >
                        <View style={this.state.getDataBase1.logros3[3] ? styles.opacity2 : styles.opacity1}>
                          <View>
                            <Text style={styles.texto}>
                              Iglesia de Santa Lucía.
                     </Text>
                          </View>
                          <View>
                            {this.state.getDataBase1.logros3[3] ?
                              <Image style={styles.starImages} style={{ width: 25, height: 25 }} source={require('../assets/images/icons8-estrella-relleno-480.png')} />
                              :
                              <Image style={styles.starImages} style={{ width: 25, height: 25 }} source={require('../assets/images/icons8-estrella-480.png')} />
                            }
                          </View>
                        </View>
                      </ImageBackground>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => { this.aqui(this.state.getDataBase1.logros3[4], 5) }}>
                    <View style={styles.cuadroLogros1}>
                      <ImageBackground
                        source={require('../assets/images/lugar5.jpg')}
                        style={styles.background2}
                        resizeMode="cover"
                      >
                        <View style={this.state.getDataBase1.logros3[4] ? styles.opacity2 : styles.opacity1}>
                          <View>
                            <Text style={styles.texto}>
                              La casa de la Capitulación.
                     </Text>
                          </View>
                          <View>
                            {this.state.getDataBase1.logros3[4] ?
                              <Image style={styles.starImages} style={{ width: 25, height: 25 }} source={require('../assets/images/icons8-estrella-relleno-480.png')} />
                              :
                              <Image style={styles.starImages} style={{ width: 25, height: 25 }} source={require('../assets/images/icons8-estrella-480.png')} />
                            }
                          </View>
                        </View>
                      </ImageBackground>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => { this.aqui(this.state.getDataBase1.logros3[5], 6) }}>
                    <View style={styles.cuadroLogros1}>
                      <ImageBackground
                        source={require('../assets/images/lugar6.jpg')}
                        style={styles.background2}
                        resizeMode="cover"
                      >
                        <View style={this.state.getDataBase1.logros3[5] ? styles.opacity2 : styles.opacity1}>
                          <View>
                            <Text style={styles.texto}>
                              Parque Vereda del Lago.
                     </Text>
                          </View>
                          <View>
                            {this.state.getDataBase1.logros3[5] ?
                              <Image style={styles.starImages} style={{ width: 25, height: 25 }} source={require('../assets/images/icons8-estrella-relleno-480.png')} />
                              :
                              <Image style={styles.starImages} style={{ width: 25, height: 25 }} source={require('../assets/images/icons8-estrella-480.png')} />
                            }
                          </View>
                        </View>
                      </ImageBackground>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => { this.aqui(this.state.getDataBase1.logros3[6], 7) }}>
                    <View style={styles.cuadroLogros1}>
                      <ImageBackground
                        source={require('../assets/images/lugar7.png')}
                        style={styles.background2}
                        resizeMode="cover"
                      >
                        <View style={this.state.getDataBase1.logros3[6] ? styles.opacity2 : styles.opacity1}>
                          <View>
                            <Text style={styles.texto}>
                              Plaza del Buen Maestro.
                     </Text>
                          </View>
                          <View>
                            {this.state.getDataBase1.logros3[6] ?
                              <Image style={styles.starImages} style={{ width: 25, height: 25 }} source={require('../assets/images/icons8-estrella-relleno-480.png')} />
                              :
                              <Image style={styles.starImages} style={{ width: 25, height: 25 }} source={require('../assets/images/icons8-estrella-480.png')} />
                            }
                          </View>
                        </View>
                      </ImageBackground>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => { this.aqui(this.state.getDataBase1.logros3[7], 8) }}>
                    <View style={styles.cuadroLogros1}>
                      <ImageBackground
                        source={require('../assets/images/lugar8.jpg')}
                        style={styles.background2}
                        resizeMode="cover"
                      >
                        <View style={this.state.getDataBase1.logros3[7] ? styles.opacity2 : styles.opacity1}>
                          <View>
                            <Text style={styles.texto}>
                              Plaza y Monumento a la Chinita.
                     </Text>
                          </View>
                          <View>
                            {this.state.getDataBase1.logros3[7] ?
                              <Image style={styles.starImages} style={{ width: 25, height: 25 }} source={require('../assets/images/icons8-estrella-relleno-480.png')} />
                              :
                              <Image style={styles.starImages} style={{ width: 25, height: 25 }} source={require('../assets/images/icons8-estrella-480.png')} />
                            }
                          </View>
                        </View>
                      </ImageBackground>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => { this.aqui(this.state.getDataBase1.logros3[8], 9) }}>
                    <View style={styles.cuadroLogros1}>
                      <ImageBackground
                        source={require('../assets/images/lugar9.png')}
                        style={styles.background2}
                        resizeMode="cover"
                      >
                        <View style={this.state.getDataBase1.logros3[8] ? styles.opacity2 : styles.opacity1}>
                          <View>
                            <Text style={styles.texto}>
                              Puente General Rafael Urdaneta.
                     </Text>
                          </View>
                          <View>
                            {this.state.getDataBase1.logros3[8] ?
                              <Image style={styles.starImages} style={{ width: 25, height: 25 }} source={require('../assets/images/icons8-estrella-relleno-480.png')} />
                              :
                              <Image style={styles.starImages} style={{ width: 25, height: 25 }} source={require('../assets/images/icons8-estrella-480.png')} />
                            }
                          </View>
                        </View>
                      </ImageBackground>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => { this.aqui(this.state.getDataBase1.logros3[9], 10) }}>
                    <View style={styles.cuadroLogros1}>
                      <ImageBackground
                        source={require('../assets/images/lugar10.jpg')}
                        style={styles.background2}
                        resizeMode="cover"
                      >
                        <View style={this.state.getDataBase1.logros3[9] ? styles.opacity2 : styles.opacity1}>
                          <View>
                            <Text style={styles.texto}>
                              Estadio José Encarnación Romero.
                     </Text>
                          </View>
                          <View>
                            {this.state.getDataBase1.logros3[9] ?
                              <Image style={styles.starImages} style={{ width: 25, height: 25 }} source={require('../assets/images/icons8-estrella-relleno-480.png')} />
                              :
                              <Image style={styles.starImages} style={{ width: 25, height: 25 }} source={require('../assets/images/icons8-estrella-480.png')} />
                            }
                          </View>
                        </View>
                      </ImageBackground>
                    </View>
                  </TouchableOpacity>
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
    paddingVertical: 80,
    paddingHorizontal: 10,
    backgroundColor: '#171F33',
    opacity: 0.8,
  },

  cuadroLogros1: {
    width: '100%',
    height: 110,
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
  getStartedText3: {
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
  luis: {
    paddingHorizontal: 50,
    paddingVertical: 20,
    opacity: 0.8,
  },
  luis2: {
    backgroundColor: '#171F33',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  contentContainer: {
    flex: 1,
    // borderWidth: 1,
    // borderColor: 'yellow',
    backgroundColor: 'white',
    borderRadius: 10,
    color: 'black',
  },
  image: {
    width: '100%',
    height: 200,
  },
  image2: {
    position: 'absolute',
    width: 310,
    height: 200,
    borderWidth: 1,
    borderColor: '#e5197f',
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
    width: '100%',
    marginTop: 20,
    borderWidth: 1,
    borderColor: 'white',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  background: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
  getStartedText: {
    fontWeight: 'bold',
    fontSize: 25,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: 'transparent',
    borderBottomColor: 'black',
    borderWidth: 2,
  },
  getStartedText2: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  camStyles: {
    paddingHorizontal: 5,
    width: 40,
    height: 40,
  },
  container1: {
    paddingVertical: 5,
    // borderWidth: 3,
    // borderColor: 'green',
  },
  container2: {
    // borderWidth: 3,
    // borderColor: '#db1529',
  },
  container3: {
    paddingHorizontal: 5,
    // borderWidth: 3,
    // borderColor: '#9dceea',

  },
  container4: {
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 5,
    // borderWidth: 3,
    // borderColor: '#a049ed',
  },
  container5: {
    paddingHorizontal: 5,
    // borderWidth: 3,
    // borderColor: '#19d62f',
  },
});
