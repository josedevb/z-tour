import React from 'react';
import { StyleSheet, View, Image, Text, ImageBackground, ScrollView, Dimensions, TouchableWithoutFeedback, ActivityIndicator } from 'react-native';

class AfterAchievement extends React.Component {
    static navigationOptions = {
        title: null,
    };

    render() {
        const key = this.props.navigation.getParam('changedIndex', 'messi')
        console.log('key', key);

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
        justifyContent: 'space-between',
        paddingHorizontal: 40,
        paddingVertical: 60,
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
        flex: 0.5,
        alignItems: 'flex-start',
        paddingHorizontal: 20,
    },
    getStartedText: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#ffffff',
    },
    mainTextContainer: {
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    estrellas: {
        flexDirection: 'row',
        justifyContent: 'space-around'
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
});
