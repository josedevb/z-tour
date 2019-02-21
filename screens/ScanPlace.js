import React from 'react';
import { StyleSheet, View, Image, Text, ImageBackground, ScrollView, Dimensions, TouchableWithoutFeedback, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { database, auth } from '../config/firebase';

class ScanPlace extends React.Component {
	static navigationOptions = {
		title: null,
	};

	state = {
		achievement: null,
		changedIndex: true,
	}

	componentDidMount = async () => {

		const usuarioData = this.props.navigation.getParam('usuarioData', 'messi')
		this.setState({
			usuarioData,
		});
		const usuarioActual = this.props.navigation.getParam('usuarioActual', 'cristiano')
		console.log('usuarioData', usuarioData);

		const { QRData } = this.props.qrState;
		var placesRef = database.ref(`achievements/${QRData}`);
		let vm = this;
		placesRef.once('value', function (snapshot) {
			if (snapshot.val() !== null) {
				vm.setState({
					achievement: snapshot.val(),
					usuarioData,
				});
				if (usuarioData.logros3[snapshot.val().id - 1] === false) {
					var newLogros1 = usuarioData.logros1.map((valor, index) => {
						if ((index === (snapshot.val().id - 1))) {
							return 1
						} else {
							return valor
						}
					})
					var newLogros2 = usuarioData.logros3.map((valor, index) => {
						return (index === (snapshot.val().id - 1) && valor === false) ? true : valor
					})

					database.ref().child('usuario/' + usuarioActual)
						.update({ logros3: newLogros2, }).then(success => {
							database.ref().child('usuario/' + usuarioActual)
								.update({ logros1: newLogros1, logros2: (usuarioData.logros2 + 1), });
						})
				} else {
					vm.setState({
						changedIndex: false,
					});
				}
			} else {
				return alert("Lugar no encontrado")
			}
		});



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
				source={require('../assets/icons/home.png')}
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
						<TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('AfterAchievement', { changedIndex: this.state.changedIndex })}>
							<View style={styles.buttons}>
								<Text style={styles.buttonText}>Regresar</Text>
							</View>
						</TouchableWithoutFeedback>
					</View>
				</View>
			</ ImageBackground >
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
		backgroundColor: '#171F33',
		opacity: 0.8,
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
