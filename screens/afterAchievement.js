import React from 'react';
import { StyleSheet, View, Image, Text, ImageBackground, ScrollView, Dimensions, TouchableWithoutFeedback, ActivityIndicator } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';


class AfterAchievement extends React.Component {
    static navigationOptions = {
        title: null,
    };

    state = {
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

    render() {
        const key = this.props.navigation.getParam('changedIndex', 'messi')
        const lugarActivo = this.props.navigation.getParam('lugarActivo', 'rabiot')
        const lugarFinal = this.props.navigation.getParam('lugarFinal', 'rabiot')
        const region = this.props.navigation.getParam('region', 'region1')

        onRegionChange = (region) => {
            region = region
        }

        console.log(lugarActivo, lugarFinal);

        return (
            <ImageBackground
                source={require('../assets/icons/home.png')}
                style={styles.background}
                resizeMode="cover"
            >
                <View style={styles.container}>
                    <View style={styles.ViewiconText}>
                        <Text style={styles.iconText}>Z-TOUR</Text>
                    </View>
                    {!key ?
                        (<View style={styles.mainTextContainer}>
                            <View >
                                <Text style={styles.getStartedText}>¡YA TIENES ESTE LOGRO!</Text>
                            </View>
                            <Image style={styles.camStyles} source={require('../assets/icons/rating.png')} />
                        </View>
                        )
                        :
                        (<View style={styles.mainTextContainer}>
                            <Text style={styles.getStartedText}>¡CONSEGUISTE UN LOGRO!</Text>
                            <View style={styles.estrellas}>
                                <Image style={styles.camStyles} source={require('../assets/icons/victory.png')} />
                            </View>
                            <View styles={styles.container1}>
                                <MapView
                                    style={{ width: '100%', height: 200 }}
                                    region={region}
                                    onRegionChange={this.onRegionChange}
                                >
                                    <Marker
                                        coordinate={lugarActivo}
                                    />
                                    <Marker
                                        coordinate={lugarFinal}
                                    />
                                    <Polyline
                                        coordinates={[
                                            lugarActivo,
                                            lugarFinal,
                                        ]}
                                        strokeWidth={2}
                                        strokeColor="red" />
                                </MapView>
                            </View>
                        </View>)}
                    <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('App')}>
                        <View style={styles.buttons}>
                            <Text style={styles.buttonText}>Regresar</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </ImageBackground >
        );
    }
}



export default AfterAchievement;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#171F33',
        // justifyContent: 'space-between',
        // paddingHorizontal: 20,
        // paddingVertical: 60,
        opacity: 0.9,
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
    iconText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
        borderColor: '#fff',
        paddingHorizontal: 5,
        paddingVertical: 5,
        marginTop: 25,
    },
    ViewiconText: {
        flex: 0.1,
        alignItems: 'flex-start',
        paddingHorizontal: 20,
    },
    getStartedText: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#ffffff',
    },
    mainTextContainer: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'space-around'
        borderWidth: 3,
        borderColor: 'yellow',
        paddingHorizontal: 20,
        paddingVertical: 60,
    },
    estrellas: {
        borderWidth: 3,
        borderColor: 'blue',
    },
    background: {
        width: '100%',
        height: '100%',
        flex: 1,
    },
    camStyles: {
        width: 150,
        height: 150,
    },
    container1: {
        paddingVertical: 5,
        borderWidth: 3,
        borderColor: 'green',
    },
});
