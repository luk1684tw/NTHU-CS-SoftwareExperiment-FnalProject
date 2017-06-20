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
  Button,
} from 'react-native';
import {Container} from 'native-base';
import NavigationContainer from './NavigationContainer';
import {web} from 'react-native-communications'

export default class Developer extends React.Component{

    constructor(props){
        super(props);
    }

    render() {
      const {navigate} = this.props.navigation;
      return (
          <Image source={require('../images/bg/season5.png')} style = {styles.background}>
          <NavigationContainer navigate={navigate} title='Today'>
            <View style={styles.header}>
            <Text style={{color:'black',fontSize:25,fontWeight:'bold'}}>Virpet Team</Text>
          </View>
            <Container style={{flexDirection:'row',justifyContent:'space-around', flex:1}}>
            <Image source={require('../images/lw.png')} style = {styles.image}>
            </Image>
            <Image source={require('../images/wei.png')} style = {styles.image}>
            </Image>
            </Container>
            <Container style={{flexDirection:'row',justifyContent:'space-around', flex:2}}>
            <Image source={require('../images/mou.png')} style = {styles.image}>
            </Image>
            <Image source={require('../images/allen.jpg')} style = {styles.image}>
            </Image>
            </Container>
          <Button title='Welcome to contact us if any question' onPress={() => { web('http://www.github.com') }}>
          </Button>
          </NavigationContainer>
          </Image>
        );
    }
}

const styles = {
    image: {
        height:120,
        width:120,
        borderRadius:70,
    },
    header:{
      justifyContent:'center',
      alignItems:'center',
      flex:1,
    },
    background:{
      resizeMode: 'cover',
      width:null,
      height:null,
      flex:1,
    }
};
