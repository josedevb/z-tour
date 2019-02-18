import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import QRActions from '../reducers/qr';
import { auth } from '../config/firebase';
import QRScanner from '../components/QRScanner';


class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  componentWillReceiveProps(props) {
    console.log("componentWillReceiveProps", props.qrState)
  }

  getPlaces = () => {
    const places = [1, 2, 1, 1, 1];
    const goals = [];
    for (let i = 0; i < 10; i++) {
      if (i < places.length)
        goals.push(<Image style={styles.starImages} source={require('../assets/images/icons8-estrella-relleno-480.png')} />)
      else
        goals.push(<Image style={styles.starImages} source={require('../assets/images/icons8-estrella-480.png')} />)
    }
    return goals.map(e => e);
  }

  scanQR = () => {
    const { actions: {
      showQrScanner,
    } } = this.props;
    showQrScanner(true);
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
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Text style={styles.headerText}>Z-TOUR</Text>
            <Button onPress={this.closeSession} color="black" title="CERRAR SESION" />
          </View>
          <View style={styles.mainTextContainer}>
            <Text style={styles.getStartedText}>¡Hola, Usuario!</Text>
          </View>
          <View style={styles.achievementContainer}>
            <Text style={styles.codeHighlightText}>Tus lugares obtenidos <Text style={{ fontWeight: 'bold' }}>5/10</Text></Text>
            <View style={styles.starContainer}>
              {this.getPlaces()}
            </View>
          </View>
          <TouchableOpacity style={styles.getStartedContainer} onPress={this.scanQR}>
            <Text style={styles.tabBarInfoText}>Comienza tu aventura turistica escaneando el codigo Z-TOUR</Text>
            <Image style={styles.camStyles} source={require('../assets/images/icons8-imágenes-de-google-48.png')} />
          </TouchableOpacity>
        </ScrollView>
        {showQR && <QRScanner setQrData={setQrData} showQrScanner={showQrScanner} {...this.props} />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    backgroundColor: '#042777',
    justifyContent: 'space-between',
  },
  welcomeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  getStartedContainer: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  mainTextContainer: {
    alignItems: 'center',
  },
  codeHighlightText: {
    justifyContent: 'center',
    color: '#ffffff',
    fontSize: 25,
    marginBottom: 40,
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontWeight: 'bold',
    fontSize: 35,
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
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    width: '80%',
  },
  camStyles: {
    width: 50,
    height: 50,
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
