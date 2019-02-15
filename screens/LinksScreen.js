import React from 'react';
import { ScrollView, StyleSheet, View , Image, Text } from 'react-native';

const goals = [
  {
    nombreLugar: 'Puente de maracaibo',
    url: '',
    descripcion: 'el puenteee'
  }
]

export default class AchievementScreen extends React.Component {
  static navigationOptions = {
    title: null,
  };

  getAchievements = () => goals.map(e => (
    <View>
      <View>
        <Image></Image>
        <Text></Text>
      </View>
      <View>
        <Text></Text>
        <Image></Image>
      </View>
    </View>
  ));

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          {this.getAchievements()}
        </ScrollView>
      </View>
    );
  }
}

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
  },
});
