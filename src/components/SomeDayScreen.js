import React from 'react';
import {Text,Image} from 'react-native';
import NavigationContainer from './NavigationContainer';
export default class SomeDayScreen extends React.Component{
    render () {
      const {navigate} = this.props.navigation;
        return (
            <NavigationContainer navigate={navigate} title='Today'>
              <Image source={require('../images/sep.png')} style = {styles.background}>
              </Image>
            </NavigationContainer>
        );
    };
}
const styles = {
  background:{
    resizeMode: 'cover',
    width:null,
    height:null,
    flex: 1
  }
};
