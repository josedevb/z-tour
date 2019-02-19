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
		this.props.navigation.navigate('PlacesScreen');
	}

	render() {
		return (
			<View style={styles.container}>
				{this.state.hasCameraPermission === null ?
					<Text>Requesting for camera permission</Text> :
					this.state.hasCameraPermission === false ?
						<Text>Camera permission is not granted</Text> :
						<View>
							<BarCodeScanner
								onBarCodeScanned={this.handleBarCodeScanned}
								style={{ height: 200, width: 200 }}
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
		justifyContent: 'center',
		paddingTop: Constants.statusBarHeight,
		backgroundColor: '#ecf0f1',
		position: 'absolute',
		width:'100%',
		height: '100%',
	},
	paragraph: {
		margin: 24,
		fontSize: 18,
		fontWeight: 'bold',
		textAlign: 'center',
		color: '#34495e',
	},
});