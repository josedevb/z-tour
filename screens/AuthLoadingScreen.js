import React from 'react';
import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { auth } from '../config/firebase';

export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    // this._bootstrapAsync();
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if(user) this.props.navigation.navigate('App');
      else this.props.navigation.navigate('Auth');
    })
  }

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}
