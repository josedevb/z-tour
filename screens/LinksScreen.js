import React from 'react';
import { ScrollView, StyleSheet, View, Image, Text, ImageBackground } from 'react-native';


export default class AchievementScreen extends React.Component {
  static navigationOptions = {
    title: null,
    header: null,
  };

  getAchievements = () => {
    const usuarioData = this.props.navigation.getParam('usuarioData', 'messi')

    return <View>
      <View>
        <Image></Image>
        <Text></Text>
      </View>
      <View>
        <Image></Image>
      </View>
    </View>
  }

  render() {
    return (
      <ImageBackground
        source={require('../assets/icons/home.png')}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.container}>
          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            {this.getAchievements()}
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171F33',
    opacity: 0.8,
  },
  contentContainer: {
    flex: 1,
    paddingVertical: 60,
    paddingHorizontal: 30,
    justifyContent: 'space-between',
  },
  background: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
});
