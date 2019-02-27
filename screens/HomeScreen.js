import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  ImageBackground,
  TouchableWithoutFeedback,
  Dimensions,
  ActivityIndicator,
  Modal,
  TouchableHighlight,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import QRActions from '../reducers/qr';
import { auth, database } from '../config/firebase';
import QRScanner from '../components/QRScanner';
import { __await } from 'tslib';
import AchievementComplete from './achievementComplete'

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    name: '',
    email: '',
    uid: '',
    showAchievement: true,
  }

  componentDidReceiveProps(props) {
    console.log("componentWillReceiveProps", props.qrState)
  }

  componentDidMount() {
    let userId = auth.currentUser.uid;
    let ref = database.ref("usuario/" + userId);
    ref.once("value")
      .then((snapshot) => {
        this.setState({
          getDataBase: snapshot.val(),
          userId,
        })
      });
}

nameUser = () => {
  auth.onAuthStateChanged(function (user) {
    if (user) {
      return user.email
      // ...
    } else {
      // User is signed out.
      // ...
      return null
    }
  });

}
getPlaces = () => {
  const places = this.state.getDataBase.logros1
  const goals = [];
  for (let i = 0; i < 10; i++) {
    if (places[i] > 0)
      goals.push(<Image style={styles.starImages} style={{ width: 25, height: 25 }} source={require('../assets/images/icons8-estrella-relleno-480.png')} />)
    else
      goals.push(<Image style={styles.starImages} style={{ width: 25, height: 25 }} source={require('../assets/images/icons8-estrella-480.png')} />)
  }
  return goals.map(e => e);
}

scanQR = () => {
  const { actions: {
    showQrScanner,
  } } = this.props;
  showQrScanner(true);
}

showModal = () => {
  if (this.state.getDataBase.logros2 >= 10 && (this.state.getDataBase.logros4===false)) {
    let userId = auth.currentUser.uid;
    database.ref().child('usuario/' + userId)
    .update({ logros4: true, })
    this.props.navigation.navigate('AchievementComplete')
  }
}

closeSession = () => auth.signOut();

render() {
  const { actions: {
    setQrData,
    showQrScanner,
  },
    qrState: {
      showQR
    } } = this.props;

  return (
    <ImageBackground
      source={require('../assets/icons/home.png')}
      style={styles.background}
      resizeMode="cover"
    >
      {this.state.getDataBase ?
        <View style={styles.container}>
          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View style={styles.welcomeContainer}>
              <View style={styles.ViewiconText}>
                <Text style={styles.iconText}>Z-TOUR</Text>
              </View>
              <TouchableWithoutFeedback onPress={this.closeSession}>
                <View style={styles.buttons}>
                  <Text style={styles.buttonText}>Cerrar Sesion</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
            <View style={styles.mainTextContainer}>
              <Text style={styles.getStartedText}>¡Hola, {this.state.getDataBase.name}  {this.state.getDataBase.lastname}!</Text>
            </View>
            <View style={styles.achievementContainer}>
              <Text style={styles.codeHighlightText}>Tus lugares obtenidos <Text style={{ fontWeight: 'bold' }}>{this.state.getDataBase.logros2}/10</Text></Text>
              <View style={styles.starContainer}>
                {this.getPlaces()}
              </View>
            </View>
            <View>
              {this.showModal()}
            </View>
            <TouchableOpacity style={styles.getStartedContainer} onPress={this.scanQR}>
              <Text style={styles.tabBarInfoText}>Comienza tu aventura turistica escaneando el codigo Z-TOUR</Text>
              <Image style={styles.camStyles} source={require('../assets/images/camara.png')} />
            </TouchableOpacity>
          </ScrollView>
          {showQR && <QRScanner setQrData={setQrData} showQrScanner={showQrScanner} {...this.props} usuarioData={this.state.getDataBase} usuarioActual={this.state.userId} />}
        </View> : <View style={styles.activity}><ActivityIndicator size="large" color="white" /></View>
      }
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
  activity: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    color: '#ffffff',
    fontSize: 25,
  },
  contentContainer: {
    flex: 1,
    paddingVertical: 60,
    paddingHorizontal: 30,
    justifyContent: 'space-between',
  },
  welcomeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  getStartedContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'black',
    opacity: 0.8,
    borderRadius: 10,
    paddingHorizontal: 5,
  },
  mainTextContainer: {
    alignItems: 'center',
  },
  codeHighlightText: {
    justifyContent: 'center',
    color: '#ffffff',
    fontSize: 15,
    marginBottom: 40,
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#ffffff',
  },
  achievementContainer: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  starContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  starImages: {
    width: 30,
    height: 30,
    transform: [{ rotate: '15 deg' }],
  },
  tabBarInfoText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ffffff',
    width: '80%',
  },
  camStyles: {
    width: 50,
    height: 50,
  },
  background: {
    width: '100%',
    height: '100%',
    flex: 1,
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
    width: 120,
    marginTop: 20,
    borderWidth: 1,
    borderColor: 'white',
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
  },
  iconText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    borderColor: '#fff',
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginTop: 20,
    width: 125,
  },
  ViewiconText: {

  },
});


const mapStateToProps = state => ({
  qrState: state.qr,
});

function mapDispatchToProps(dispatch) {
  const allActions = {
    ...QRActions,
  };

  return {
    actions: bindActionCreators(allActions, dispatch),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
