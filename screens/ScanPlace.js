import React from 'react';
import { StyleSheet, View, Image, Text, ImageBackground, ScrollView, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { database, auth } from '../config/firebase';

const goals = [
	{
		nombreLugar: 'Puente de maracaibo',
		url: '',
		descripcion: 'el puenteee'
	}
]



class ScanPlace extends React.Component {
	static navigationOptions = {
		title: null,
	};

	state = {
		achievement: null,
	}


	loadStateAchievements = (callback) => {
		const { QRData } = this.props.qrState;
		var placesRef = database.ref(`achievements/${QRData}`);
		let vm = this;
		placesRef.once('value', function (snapshot) {
			if (snapshot.val() !== null) {
				vm.setState({ achievement: snapshot.val() });
				return callback

			} else {
				return alert("Lugar no encontrado")
			}
		});
	}

	loadStateDataUser = (callback) => {
		let userId = auth.currentUser.uid;
		let ref = database.ref("usuario/" + userId);
		ref.once("value")
			.then((snapshot) => {
				this.setState({
					dataUser: snapshot.val(),
				})
				console.log('datauser', this.state.dataUser);
               return callback
			});
	}

	chargedStateLogro = () => {
		var newLogros1 = dataUser.logros1.map((valor, index) => {
			return index === (this.state.achievement.id - 1) ? 1 : valor
		})
		this.setState({
			newLogros1,
		})
		return console.log('nuevo logro', this.state.newLogros1);
	}

	componentDidMount = async () => {

		this.loadStateAchievements(this.loadStateDataUser(this.chargedStateLogro))
		//---------------------------------------------------//


		


		// let obj = {
		// 	logros1: 

		// if(dataUser.logros1[achievement.id - 1] === 0)
		// ref.update()
		//------------------------------------------------------//

	}


	render() {
		const { achievement } = this.state;

		if (!achievement) return null;
		return (
			<ImageBackground
				source={require('../assets/icons/lugar.png')}
				style={styles.background}
				resizeMode="cover"
			>
				<View style={styles.container}>
					<View style={styles.contentContainer}>
						<View>
							<Image resizeMode="cover" style={styles.image} source={{ uri: achievement.imagenLugar }} />
						</View>
						<View>
							<Text style={styles.placeName}>
								{achievement.nombreLugar}
							</Text>
						</View>
						<ScrollView contentContainerStyle={styles.scrollViewContainer}>
							<View>
								<Text style={styles.placeDescription}>
									{achievement.descripcion}
								</Text>
							</View>
						</ScrollView>
						<TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('App')}>
							<View style={styles.buttons}>
								<Text style={styles.buttonText}>Regresar</Text>
							</View>
						</TouchableWithoutFeedback>
					</View>
				</View>
			</ ImageBackground>
		);
	}
}

const mapStateToProps = state => ({
	qrState: state.qr,
});

export default connect(mapStateToProps, null)(ScanPlace);

const styles = StyleSheet.create({
	container: {
		flex: 1,
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
		alignItems: 'center'
	},
	placeName: {
		color: '#ffffff'
	},
	image: {
		width: 200,
		height: 200,
	},
	placeDescription: {
		color: '#ffffff'
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
	background: {
		width: '100%',
		height: '100%',
		flex: 1,
	},
});
