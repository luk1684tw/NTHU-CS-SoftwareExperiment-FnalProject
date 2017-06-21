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

import { Col, Row, Grid } from 'react-native-easy-grid';

import {Container, Content} from 'native-base';
import {connect} from 'react-redux';
import {setTheme} from '../states/ChooseTheme.js';



class ChooseColor extends React.Component{
    constructor(props){
        super(props);

        this.handleThemeMode = this.handleThemeMode.bind(this);
    }
    render () {
        const {navigate} = this.props.navigation;
        return (
            <Container>
              <Image source={require('../images/stone.png')} style={styles.background}>
                <Content>
                    <Grid>
                    <Col>
                    <TouchableOpacity onPress={() =>{this.handleThemeMode(0),navigate('Today')}}>
                        <Image
                        style={styles.buttonul}
                        source={require('../images/bg/season1.png')}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() =>{this.handleThemeMode(1),navigate('Today')}}>
                        <Image
                            style={styles.buttondl}
                            source={require('../images/bg/plant1.png')}
                        />
                    </TouchableOpacity>
                  </Col>
                  <Col>
                    <TouchableOpacity onPress={() =>{this.handleThemeMode(2),navigate('Today')}}>
                        <Image
                            style={styles.buttonur}
                            source={require('../images/bg/bird1.png')}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() =>{this.handleThemeMode(3),navigate('Today')}}>
                        <Image
                            style={styles.buttondr}
                            source={require('../images/bg/pet1.png')}
                        />
                    </TouchableOpacity>
                  </Col>
                  </Grid>
                </Content>
              </Image>
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
    buttonul: {
      width: 120,
      height: 180,
      marginTop:80,
      borderWidth: 1,
      marginLeft:60,
      borderColor:'gray'
    },
    buttonText: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
    },
    background:{
      resizeMode: 'cover',
      width:null,
      height:null,
      flex: 1,
    },
    buttonur: {
      width: 120,
      height: 180,
      marginTop:80,
      borderWidth: 1,
      marginRight: 20,
      marginLeft:10,
      borderColor:'gray'
    },
    buttondl: {
      width: 120,
      height: 180,
      marginTop:20,
      borderWidth: 1,
      marginLeft:60,
      borderColor:'gray'
    },
    buttondr: {
      width: 120,
      height: 180,
      marginTop:20,
      borderWidth: 1,
      marginRight:20,
      marginLeft:10,
      borderColor:'gray'
    }
});
