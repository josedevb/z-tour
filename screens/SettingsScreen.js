import React from 'react';
import { ScrollView, StyleSheet, View, Image, Text, ImageBackground, ActivityIndicator } from 'react-native';
import { auth, database } from '../config/firebase';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: null,
    header: null,
  };

  state = {
    achievements: null,
  }

  componentDidMount() {
    let userId = auth.currentUser.uid;
    let ref = database.ref("achievements");
    ref.once("value")
      .then((snapshot) => {
        this.setState({
          achievements: snapshot.val(),
        })
      })
    console.log(this.state);
  }

  render() {
    return (
      <ImageBackground
        source={require('../assets/icons/home.png')}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.container}>
          {this.state.achievements ?
            (
              <View>
                <Text style={styles.getStartedText}>INFORMACION:</Text>
                <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                  <View>
                    <View>
                      <Text style={styles.texto}>
                        Basílica de Nuestra Señora de Chiquinquirá:
                      </Text>
                      <Text style={styles.texto2}>
                        Visitas: {this.state.achievements.lugar1.visitas}
                      </Text>
                      <Text style={styles.texto2}>
                        Likes: {this.state.achievements.lugar1.likes}
                      </Text>
                    </View>
                    <View>
                      <Text style={styles.texto}>
                        Calle Carabobo de El Saladillo:
             </Text>
                      <Text style={styles.texto2}>
                        Visitas: {this.state.achievements.lugar2.visitas}
                      </Text>
                      <Text style={styles.texto2}>
                        Likes: {this.state.achievements.lugar2.likes}
                      </Text>
                    </View>
                    <View>
                      <Text style={styles.texto}>
                        El Convento de San Francisco de Asís:
                  </Text>
                      <Text style={styles.texto2}>
                        Visitas: {this.state.achievements.lugar3.visitas}
                      </Text>
                      <Text style={styles.texto2}>
                        Likes: {this.state.achievements.lugar3.likes}
                      </Text>
                    </View>
                    <View>
                      <Text style={styles.texto}>
                        Iglesia de Santa Lucía:
                  </Text>
                      <Text style={styles.texto2}>
                        Visitas: {this.state.achievements.lugar4.visitas}
                      </Text>
                      <Text style={styles.texto2}>
                        Likes: {this.state.achievements.lugar4.likes}
                      </Text>
                    </View>
                    <View>
                      <Text style={styles.texto}>
                        La casa de la Capitulación:
                  </Text>
                      <Text style={styles.texto2}>
                        Visitas: {this.state.achievements.lugar5.visitas}
                      </Text>
                      <Text style={styles.texto2}>
                        Likes: {this.state.achievements.lugar5.likes}
                      </Text>
                    </View>
                    <View>
                      <Text style={styles.texto}>
                        Parque Vereda del Lago:
                  </Text>
                      <Text style={styles.texto2}>
                        Visitas: {this.state.achievements.lugar6.visitas}
                      </Text>
                      <Text style={styles.texto2}>
                        Likes: {this.state.achievements.lugar6.likes}
                      </Text>
                    </View>
                    <View>
                      <Text style={styles.texto}>
                        Plaza del Buen Maestro:
                  </Text>
                      <Text style={styles.texto2}>
                        Visitas: {this.state.achievements.lugar7.visitas}
                      </Text>
                      <Text style={styles.texto2}>
                        Likes: {this.state.achievements.lugar7.likes}
                      </Text>
                    </View>
                    <View>
                      <Text style={styles.texto}>
                        Plaza y Monumento a la Chinita.
                  </Text>
                      <Text style={styles.texto2}>
                        Visitas: {this.state.achievements.lugar8.visitas}
                      </Text>
                      <Text style={styles.texto2}>
                        Likes: {this.state.achievements.lugar8.likes}
                      </Text>
                    </View>
                    <View>
                      <Text style={styles.texto}>
                        Puente General Rafael Urdaneta:
                  </Text>
                      <Text style={styles.texto2}>
                        Visitas: {this.state.achievements.lugar9.visitas}
                      </Text>
                      <Text style={styles.texto2}>
                        Likes: {this.state.achievements.lugar9.likes}
                      </Text>
                    </View>
                    <View>
                      <Text style={styles.texto}>
                        Estadio José Encarnación Romero:
                  </Text>
                      <Text style={styles.texto2}>
                        Visitas: {this.state.achievements.lugar10.visitas}
                      </Text>
                      <Text style={styles.texto2}>
                        Likes: {this.state.achievements.lugar10.likes}
                      </Text>
                    </View>
                  </View>
                </ScrollView>
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
    backgroundColor: '#171F33',
    opacity: 0.8,
    paddingVertical: 80,
    paddingHorizontal: 50,
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
});