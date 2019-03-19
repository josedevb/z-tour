import React from 'react';
import { StyleSheet, View, Image, Text, ImageBackground, ScrollView, Dimensions, TouchableWithoutFeedback, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { database, auth } from '../config/firebase';
import MapView, { Marker } from 'react-native-maps';

class ScanPlace extends React.Component {
	static navigationOptions = {
		title: null,
		header: null,
	};

	state = {
		achievement: null,
		changedIndex: true,
		map0: {
			region: { latitude: 10.643029, longitude: -71.615879, latitudeDelta: 0.00421, longitudeDelta: 0.00922, },
			coordinate: { latitude: 10.643029, longitude: -71.615879, }
		},
		map1: {
			region: { latitude: 10.644527, longitude: -71.614596, latitudeDelta: 0.00421, longitudeDelta: 0.00922, },
			coordinate: { latitude: 10.644527, longitude: -71.614596, }
		},
		map2: {
			region: { latitude: 10.641274, longitude: -71.609351, latitudeDelta: 0.00421, longitudeDelta: 0.00922, },
			coordinate: { latitude: 10.641274, longitude: -71.609351, }
		},
		map3: {
			region: { latitude: 10.646855, longitude: -71.604388, latitudeDelta: 0.00421, longitudeDelta: 0.00922, },
			coordinate: { latitude: 10.646855, longitude: -71.604388, }
		},
		map4: {
			region: { latitude: 10.642242, longitude: -71.607860, latitudeDelta: 0.00421, longitudeDelta: 0.00922, },
			coordinate: { latitude: 10.642242, longitude: -71.607860, }
		},
		map5: {
			region: { latitude: 10.654357, longitude: -71.593435, latitudeDelta: 0.00421, longitudeDelta: 0.00922, },
			coordinate: { latitude: 10.654357, longitude: -71.593435, }
		},
		map6: {
			region: { latitude: 10.688081, longitude: -71.596612, latitudeDelta: 0.00421, longitudeDelta: 0.00922, },
			coordinate: { latitude: 10.688081, longitude: -71.596612, }
		},
		map7: {
			region: { latitude: 10.642726, longitude: -71.612586, latitudeDelta: 0.00421, longitudeDelta: 0.00922, },
			coordinate: { latitude: 10.642726, longitude: -71.612586, }
		},
		map8: {
			region: { latitude: 10.573638, longitude: -71.614030, latitudeDelta: 0.00421, longitudeDelta: 0.00922, },
			coordinate: { latitude: 10.642726, longitude: -71.612586, }
		},
		map9: {
			region: { latitude: 10.674144, longitude: -71.645006, latitudeDelta: 0.00421, longitudeDelta: 0.00922, },
			coordinate: { latitude: 10.674144, longitude: -71.645006, }
		},
	}

	componentDidMount = async () => {

		const usuarioData = this.props.navigation.getParam('usuarioData', 'messi')
		this.setState({
			usuarioData,
		});
		const usuarioActual = this.props.navigation.getParam('usuarioActual', 'cristiano')
		const { QRData } = this.props.qrState;
		this.setState({
			QRData,
		})
		var placesRef = database.ref(`achievements/${QRData}`);
		let ref = database.ref("usuario/" + usuarioActual);
		ref.once("value")
			.then((snapshot) => {
				this.setState({
					usuarioData: snapshot.val(),
					usuarioActual,
				})
			}).then((success) => {
				var placesRef = database.ref(`achievements/${QRData}`);
				let vm = this;
				placesRef.once('value', function (snapshot) {
					if (snapshot.val() !== null) {
						vm.setState({
							achievement: snapshot.val(),
						});
						vm.buscarElmasCercano()
						const activo = vm.selectCoordinate()
						vm.setState({ activo })
						const heartss = vm.state.usuarioData.likes
						const achievementX = vm.state.achievement.map
						if (heartss[achievementX]) {
							vm.setState({
								heart: true
							});
						} else {
							vm.setState({
								heart: false
							});
						}
						// console.log(heartss);
						if (vm.state.usuarioData.logros3[snapshot.val().id - 1] === false) {
							var newLogros1 = vm.state.usuarioData.logros1.map((valor, index) => {
								if ((index === (snapshot.val().id - 1))) {
									return 1
								} else {
									return valor
								}
							})
							var newLogros2 = vm.state.usuarioData.logros3.map((valor, index) => {
								return (index === (snapshot.val().id - 1) && valor === false) ? true : valor
							})

							database.ref().child('usuario/' + usuarioActual)
								.update({ logros3: newLogros2, }).then(success => {
									database.ref().child('usuario/' + usuarioActual)
										.update({ logros1: newLogros1, logros2: (vm.state.usuarioData.logros2 + 1), });
								})
						} else {
							vm.setState({
								changedIndex: false,
							});
						}
					} else {
						alert("Lugar no encontrado")
					}
				});
			})
	}

	onRegionChange = (region) => {
		region = region
	}

	selectRegion = () => {
		if (this.state.achievement.map === 0)
			return this.state.map0.region
		if (this.state.achievement.map === 1)
			return this.state.map1.region
		if (this.state.achievement.map === 2)
			return this.state.map2.region
		if (this.state.achievement.map === 3)
			return this.state.map3.region
		if (this.state.achievement.map === 4)
			return this.state.map4.region
		if (this.state.achievement.map === 5)
			return this.state.map5.region
		if (this.state.achievement.map === 6)
			return this.state.map6.region
		if (this.state.achievement.map === 7)
			return this.state.map7.region
		if (this.state.achievement.map === 8)
			return this.state.map8.region
		if (this.state.achievement.map === 9)
			return this.state.map9.region
	}

	selectCoordinate = () => {
		if (this.state.achievement.map === 0)
			return this.state.map0.coordinate
		if (this.state.achievement.map === 1)
			return this.state.map1.coordinate
		if (this.state.achievement.map === 2)
			return this.state.map2.coordinate
		if (this.state.achievement.map === 3)
			return this.state.map3.coordinate
		if (this.state.achievement.map === 4)
			return this.state.map4.coordinate
		if (this.state.achievement.map === 5)
			return this.state.map5.coordinate
		if (this.state.achievement.map === 6)
			return this.state.map6.coordinate
		if (this.state.achievement.map === 7)
			return this.state.map7.coordinate
		if (this.state.achievement.map === 8)
			return this.state.map8.coordinate
		if (this.state.achievement.map === 9)
			return this.state.map9.coordinate
	}

	selectCoordinate2 = (value) => {
		if (0 === value)
			return this.state.map0.coordinate
		if (1 === value)
			return this.state.map1.coordinate
		if (2 === value)
			return this.state.map2.coordinate
		if (3 === value)
			return this.state.map3.coordinate
		if (4 === value)
			return this.state.map4.coordinate
		if (5 === value)
			return this.state.map5.coordinate
		if (6 === value)
			return this.state.map6.coordinate
		if (7 === value)
			return this.state.map7.coordinate
		if (8 === value)
			return this.state.map8.coordinate
		if (9 === value)
			return this.state.map9.coordinate
	}

	likes = () => {
		var contador = 0
		let userId = auth.currentUser.uid;
		let ref = database.ref("usuario/" + userId);
		let vm = this
		ref.once("value")
			.then((snapshot) => {
				vm.setState({
					getDataBase: snapshot.val(),
					userId,
				})
			}).then((success) => {
				var likess = this.state.getDataBase.likes.map((valor, index) => {
					if (index === this.state.achievement.map) {
						if (valor === true) {
							contador = -1
							vm.setState({
								heart: true,
							})
							return false
						}
						if (valor === false) {
							contador = +1
							vm.setState({
								heart: false,
							})
							return true
						}
					}
					else {
						return valor
					}
				})
				console.log('likes', likess, contador);
				database.ref().child('usuario/' + userId)
					.update({ likes: likess, })
				if (this.state.achievement.likes >= 0) {
					database.ref().child('achievements/' + this.state.QRData)
						.update({ likes: (this.state.achievement.likes + contador) })
					vm.setState({ heart: !this.state.heart })
				}
			}).then((success) => {
				var placesRef = database.ref('achievements/' + this.state.QRData);
				let vm = this;
				placesRef.once('value', function (snapshot) {
					if (snapshot.val() !== null) {
						vm.setState({
							achievement: snapshot.val(),
						});
					}
				})
			})
	}


	buscarElmasCercano = () => {
		const staticCoordinate = this.selectCoordinate()
		const latitude = staticCoordinate.latitude
		const longitude = staticCoordinate.longitude
		var cero = 999999
		const restantes = this.state.usuarioData.logros3.map((value, index) => {
			let staticCoordinate2 = this.selectCoordinate2(index)
			// console.log('staticCoordinate2', staticCoordinate2);
			let latitude2 = staticCoordinate2.latitude
			let longitude2 = staticCoordinate2.longitude
			let distanciaa = this.distance(latitude, longitude, latitude2, longitude2)
			if (distanciaa > 0 && distanciaa < cero && value === false) {
				cero = distanciaa
				this.setState({
					puntoFinal: this.selectCoordinate2(index)
				})
			}
			return [distanciaa, this.selectCoordinate2(index)]
		})

		// console.log('restantes', restantes);
		this.setState({
			restantes,
		})
		console.log('menor', this.state.puntoFinal);

	}

	distance = (lat1, lon1, lat2, lon2) => {
		const p = 0.017453292519943295// Math.PI / 180
		const c = Math.cos
		const a = 0.5 - c((lat2 - lat1) * p) / 2
			+ c(lat1 * p) * c(lat2 * p)
			* (1 - c((lon2 - lon1) * p)) / 2
		return 12742 * Math.asin(Math.sqrt(a))// 2 * R; R = 6371 km
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
					<ScrollView contentContainerStyle={styles.scrollViewContainer}>
						<View style={styles.contentContainer}>
							<View style={styles.container1}>
								<MapView
									style={{ width: '100%', height: 200 }}
									region={this.selectRegion()}
									onRegionChange={() => this.onRegionChange(this.selectRegion())}
								>
									<Marker coordinate={this.selectCoordinate()} />
								</MapView>
							</View>
							<View style={styles.container2}>
								<Image resizeMode="cover" style={styles.image} source={{ uri: achievement.imagenLugar }} />
							</View>
							<View style={styles.container3}>
								<Text style={styles.getStartedText}>
									{achievement.nombreLugar}
								</Text>
							</View>
							<View style={styles.container4}>
								<TouchableWithoutFeedback styles={styles.image2} onPress={() => this.likes()} >
									{this.state.heart
										?
										<View>
											<Image style={styles.camStyles} source={require('../assets/icons/like.png')} />
										</View>
										:
										<View>
											<Image style={styles.camStyles} source={require('../assets/icons/unlike.png')} />
										</View>
									}
								</TouchableWithoutFeedback>
								<Text style={styles.getStartedText2}>
									{this.state.achievement.likes}
								</Text>
							</View>
							<View style={styles.container5}>
								<Text>
									{achievement.descripcion}
								</Text>
							</View>
						</View>
						<TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('AfterAchievement', { changedIndex: this.state.changedIndex, region: this.selectRegion(), lugarActivo: this.state.activo, lugarFinal: this.state.puntoFinal, usuarioData: this.state.usuarioData })}>
							<View style={styles.buttons}>
								<Text style={styles.buttonText}>Regresar</Text>
							</View>
						</TouchableWithoutFeedback>
					</ScrollView>
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
		// borderWidth: 1,
		// borderColor: 'red',
		paddingVertical: 50,
		paddingHorizontal: 30,
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
	activity: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
