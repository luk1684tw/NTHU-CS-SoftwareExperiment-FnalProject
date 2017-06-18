import React from 'react';
import {Text,Image} from 'react-native';
import NavigationContainer from './NavigationContainer';
import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';

export default class UpcomingScreen extends React.Component{



    render () {
        const {navigate} = this.props.navigation;
        return (
          <Image source={require('../images/fall.png')} style = {styles.background}>
            <NavigationContainer navigate={navigate} title='Upcoming'>
                <CalendarStrip

                />
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
