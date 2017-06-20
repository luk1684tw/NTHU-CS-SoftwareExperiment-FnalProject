import React from 'react';

import {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Navigator
} from 'react-native';

import {Button, Container , Content} from 'native-base';
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
                <Container>
                    <Content>
                <Button style={styles.buttonblack} onPress={()=> {this.handleThemeMode(1)}} >
                    <Text>Press me</Text>
                </Button>
                <Button style={styles.buttonblack} onPress={()=> {this.handleThemeMode(2)}} >
                    <Text>Press me!</Text>
                </Button>
              {/*<TouchableOpacity style={styles.buttonblack} onPress={this.handleThemeMode(1)}>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonpink} onPress={() => navigate('Setting')}>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonbrown} onPress={() => navigate('Setting')}>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttongrey} onPress={() => navigate('Setting')}>
              </TouchableOpacity>*/}
              </Content>
              </Container>

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
