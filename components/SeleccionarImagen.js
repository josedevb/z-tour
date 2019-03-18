import React from 'react';
import { Button, Image, View, TouchableOpacity } from 'react-native';
import { ImagePicker } from 'expo';
import { connect } from 'react-redux'

const SeleccionarImagen = ({imagen, cargar}) => {
    const seleccionarImagen = async () => {
        // console.log('seleccionarImagen');
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
        });
        // console.log(result);
        if (!result.cancelled) {
            cargar(result);
        }
    };
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity onPress={() => seleccionarImagen()}>
                {
                    imagen ?
                        <Image source={{ uri: imagen.uri }} style={{ width: 150, height: 150, borderRadius: 75 }} />
                        :
                        <Image source={require('../assets/usuario.png')} style={{ width: 150, height: 150, borderRadius: 75 }} />
                }
            </TouchableOpacity>
        </View>
    );
}

const mapStateToProps = state => {
    return {
        numero: state.reducerPrueba,
        imagen: state.reducerImagenSignUp,
    }
}

const mapDispatchToProps = dispatch => ({
    registro: (values) => {
        dispatch(actionRegistro(values))
    },
    cargarImagen: (image) => {
        dispatch({ type: CONSTANTES.CARGAR_IMAGEN_SIGNUP, image})
    },
    limpiarImagen: () => {
        dispatch({
            type: CONSTANTES.LIMPIAR_IMAGEN_SIGNUP
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(SeleccionarImagen)