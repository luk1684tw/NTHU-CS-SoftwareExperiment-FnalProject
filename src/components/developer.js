import React from 'react';

import {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  Navigator,
  Button
} from 'react-native';
import NavigationContainer from './NavigationContainer';
import {web} from 'react-native-communications'

export default class Developer extends React.Component{

    constructor(props){
        super(props);
    }

    render() {
      const {navigate} = this.props.navigation;
      return (
          <NavigationContainer navigate={navigate} title='Today'>
          <Button title='Fuck the world' onPress={() => { web('http://www.github.com') }}>


          </Button>
          </NavigationContainer>
        );
    }
}
