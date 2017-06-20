import React from 'react';
import {Text,Image} from 'react-native';
import NavigationContainer from './NavigationContainer';
import CalendarStrip from 'react-native-calendar-strip';
import PostList from './PostList.js';
import moment from 'moment';
import {connect} from 'react-redux';
class UpcomingScreen extends React.Component{


    render () {
        const {navigate} = this.props.navigation;
        if(this.props.mode===0){
            var url= require('../images/bg/fall.png');
        }
        else if(this.props.mode===1){
            var url=require('../images/bg/pet3.png');
        }
        else if(this.props.mode===2){
            var url=require('../images/bg/plant3.png');
        }
        else if(this.props.mode===3){
            var url=require('../images/bg/bird3.png');
        }

        return (
            <Image source={url} style = {styles.background}>
                <NavigationContainer navigate={navigate} title='Upcoming'>
                    <CalendarStrip/>
                    <PostList duration='upcoming'/>
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


export default connect((state, ownProps) => ({
    mode:state.theme.mode,
}))(UpcomingScreen);
