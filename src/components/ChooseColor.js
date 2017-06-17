import React from 'react';

import {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button
} from 'react-native';
import SettingsList from 'react-native-settings-list';


export default class ChooseColor extends React.Component{
    constructor(props){
        super(props);
    }
    render () {
        return (

              <View style={styles.center}>
              <TouchableOpacity style={styles.buttonblack} >

              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonpink}>

              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonbrown}>

              </TouchableOpacity>
              <TouchableOpacity style={styles.buttongrey}>

              </TouchableOpacity>
              </View>

        );
    };
}

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
