import React from 'react';

import {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  Navigator
} from 'react-native';

import {connect} from 'react-redux';
import {setTheme} from '../states/ChooseTheme.js';
import SettingsList from 'react-native-settings-list';


class ChooseColor extends React.Component{
    constructor(props){
        super(props);

        this.handleThemeMode = this.handleThemeMode.bind(this);
    }
    render () {
        const {navigate} = this.props.navigation;
        return (
              <View style={styles.center}>
              <TouchableOpacity style={styles.buttonblack} onPress={() =>this.handleThemeMode(0)}>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonpink} onPress={() =>this.handleThemeMode(1)}>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonbrown} onPress={() =>this.handleThemeMode(2)}>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttongrey} onPress={() =>this.handleThemeMode(3)}>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttongrey} onPress={() => navigate('Setting')}>
              </TouchableOpacity>
              </View>
        );
    };
    handleThemeMode(mode) {
        console.log('mode:',mode);
        this.props.dispatch(setTheme(mode));
    }
}

export default connect((state) => ({
}))(ChooseColor);

const styles = StyleSheet.create({
  center: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  buttonblack: {
    margin:0,
    width: 90,
    height: 90,
    backgroundColor:'powderblue'
  },
  buttonpink: {
    margin:0,
    width: 90,
    height: 90,
    backgroundColor: 'skyblue'
  },
  buttonbrown: {
    margin:0,
    width: 90,
    height: 90,
    backgroundColor: 'steelblue'
  },
  buttongrey: {
    margin:0,
    width: 90,
    height: 90,
    backgroundColor: 'royalblue'
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
