import React from 'react';
import { ScrollView, StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { database } from '../config/firebase';

const backButton = require('../assets/images/icons8-izquierda-en-cuadrado-480.png');

class ScanPlace extends React.Component {
	static navigationOptions = {
		title: null,
	};

	state = {
		achievement: null,
	}

	componentDidMount() {
		const { QRData } = this.props.qrState;
		var placesRef = database.ref(`achievements/${QRData}`);
		let vm = this;
		placesRef.once('value', function (snapshot) {
			if (snapshot.val() !== null) {
				vm.setState({ achievement: snapshot.val() });
			} else {
				alert("Lugar no encontrado")
			}
		});
	}

	render() {
		const { achievement } = this.state;
		if (!achievement) return null;
		return (
			<View style={styles.container}>
				<View style={styles.contentContainer}>
					<View style={styles.header}>
						<TouchableOpacity onPress={() => this.props.navigation.navigate('App')}>
							<Image style={styles.backButton} source={backButton} />
						</TouchableOpacity>
					</View>
					<View>
						<Image resizeMode="cover" style={styles.image} source={{ uri: achievement.imagenLugar }} />
					</View>
					<View>
						<Text style={styles.placeName}>
							{achievement.nombreLugar}
						</Text>
					</View>
					<View>
						<Text style={styles.placeDescription}>
							{achievement.descripcion}
						</Text>
					</View>
				</View>
			</View>
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
		alignItems: 'center',
	},
	placeName: {
		color: '#ffffff',
	},
	image: {
		width: 150,
		height: 150,
	},
	placeDescription: {
		color: '#ffffff',
	},
	backButton: {
		width: 40,
		height: 40,
	},
	header: {
		alignSelf: 'flex-start',
	},
});
