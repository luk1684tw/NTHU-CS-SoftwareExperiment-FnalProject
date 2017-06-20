import React from 'react';

import {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  Navigator,
  TouchableHighlight,
  Image,
} from 'react-native';

import {Container} from 'native-base';
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
            <Container style={{backgroundColor:'rgb(232, 235, 188)'}}>
              <Container style={{flexDirection:'row', flex:2}}>
              <TouchableOpacity onPress={() =>{this.handleThemeMode(0),navigate('Setting')}}>
                <Image
                  style={styles.button}
                  source={require('../images/bg/season1.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() =>{this.handleThemeMode(1),navigate('Setting')}}>
                <Image
                  style={styles.button}
                  source={require('../images/bg/plant1.png')}
                />
              </TouchableOpacity>
            </Container>
            <Container style={{flexDirection:'row', flex:2}}>
              <TouchableOpacity onPress={() =>{this.handleThemeMode(2),navigate('Setting')}}>
                <Image
                  style={styles.button}
                  source={require('../images/bg/bird1.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() =>{this.handleThemeMode(3),navigate('Setting')}}>
                <Image
                  style={styles.button}
                  source={require('../images/bg/pet1.png')}
                />
              </TouchableOpacity>
            </Container>
          </Container>
        );
    };
    handleThemeMode(mode) {
        console.log('mode:', mode);
        this.props.dispatch(setTheme(mode));
    }
}

export default connect((state) => ({
}))(ChooseColor);

const styles = StyleSheet.create({
    button: {
      width: 120,
      height: 180,
      marginTop:40,
      borderWidth: 1,
      marginLeft:'auto',
      marginRight:'auto',
      marginLeft: 38,
      borderColor:'gray'
    },
    buttonText: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
    },
});
