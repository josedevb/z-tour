import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { Constants, BarCodeScanner, Permissions } from 'expo';

export default class App extends Component {
	state = {
		hasCameraPermission: null
	};

	componentDidMount() {
		this._requestCameraPermission();
	}

	_requestCameraPermission = async () => {
		const { status } = await Permissions.askAsync(Permissions.CAMERA);
		this.setState({
			hasCameraPermission: status === 'granted',
		});
	};

	handleBarCodeScanned = ({ type, data }) => {
		const {
			setQrData,
			showQrScanner,
		} = this.props;
		setQrData(data);
		showQrScanner(false);
		this.props.navigation.navigate('PlacesScreen', {usuarioData:this.props.usuarioData,usuarioActual:this.props.usuarioActual});
	}

	render() {
		return (
			<View style={styles.container}>
				<TouchableWithoutFeedback onPress={() => this.props.showQrScanner(false)}>
					<View style={styles.buttons}>
						<Text style={styles.buttonText}>Regregar Lobby</Text>
					</View>
				</TouchableWithoutFeedback>
				{this.state.hasCameraPermission === null ?
					<Text>Requesting for camera permission</Text> :
					this.state.hasCameraPermission === false ?
						<Text>Camera permission is not granted</Text> :
						<View>
							<BarCodeScanner
								onBarCodeScanned={this.handleBarCodeScanned}
								style={{ height: 50, width: 150 }}
							/>
						</View>
				}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-around',
		paddingTop: Constants.statusBarHeight,
		backgroundColor: '#171F33',
		position: 'absolute',
		width: '100%',
		height: '100%',
	},
	paragraph: {
		margin: 24,
		fontSize: 18,
		fontWeight: 'bold',
		textAlign: 'center',
		color: '#34495e',
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
		width: 180,
		borderWidth: 1,
		borderColor: 'white',
	},
	buttonText: {
		color: 'white',
		fontSize: 20,
	},
});