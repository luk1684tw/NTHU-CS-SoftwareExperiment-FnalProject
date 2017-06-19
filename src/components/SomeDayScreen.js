import React from 'react';
import {Text,Image} from 'react-native';
import NavigationContainer from './NavigationContainer';
import PostList from './PostList.js';
import CalendarStrip from 'react-native-calendar-strip';
export default class SomeDayScreen extends React.Component{
    render () {
      const {navigate} = this.props.navigation;
      if(this.props.mode===0){
          var url= require('../images/plant1.png');
      }
      else if(this.props.mode===1){
          var url=require('../images/pet1.png');
      }
      else if(this.props.mode===2){
          var url=require('../images/summer.png');
      }
      else if(this.props.mode===3){
          var url=require('../images/bird1.png');
      }
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
