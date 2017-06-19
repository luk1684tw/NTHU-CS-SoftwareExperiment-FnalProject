import React from 'react';
import {Text,Image} from 'react-native';
import NavigationContainer from './NavigationContainer';
import PostList from './PostList.js';
import CalendarStrip from 'react-native-calendar-strip';
export default class SomeDayScreen extends React.Component{
    render () {
      const {navigate} = this.props.navigation;
        return (
            <Image source={require('../images/sep.png')} style = {styles.background}>
                <NavigationContainer navigate={navigate} title='Today'>
                    <PostList/>
                </NavigationContainer>
            </Image>

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
