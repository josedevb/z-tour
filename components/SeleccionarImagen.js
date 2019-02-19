import React from 'react';
import { Button, Image, View, TouchableOpacity } from 'react-native';
import { ImagePicker } from 'expo';

export default class SeleccionarImagen extends React.Component {
    state = {
        image: null,
    };

    render() {
        let { image } = this.state;

        return (
            <View style={{ flex: 1 , alignItems: 'flex-start', justifyContent: 'center' }}>
                <TouchableOpacity onPress={() => this.seleccionarImagen()}>
                    <Image source={require('../assets/icons/usuario.png')} style={{ width: 150, height: 150, borderRadius: 75 }} />
                </TouchableOpacity>
                {image &&
                    <Image source={{ uri: image }} style={{ width: 150, height: 150 }} />}
            </View>
        );
    }

    seleccionarImagen = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
        });

        console.log(result);

        if (!result.cancelled) {
            this.setState({ image: result.uri });
        }
    };
}