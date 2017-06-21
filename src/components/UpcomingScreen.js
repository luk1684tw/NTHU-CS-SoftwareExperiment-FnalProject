import React from 'react';
import {Text,Image} from 'react-native';
import NavigationContainer from './NavigationContainer';
import CalendarStrip from 'react-native-calendar-strip';
import PostList from './PostList.js';
import moment from 'moment';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Fab} from 'native-base';

class UpcomingScreen extends React.Component{
    constructor(props) {
        super (props);
        this.state = {
            fabActive: false,
        };
        this.handleFabClose = this.handleFabClose.bind(this);
    };


    render () {
        const {navigate} = this.props.navigation;
        if(this.props.mode===0){
            var url= require('../images/bg/season3.png');
        }
        else if(this.props.mode===1){
            var url=require('../images/bg/plant3.png');
        }
        else if(this.props.mode===2){
            var url=require('../images/bg/bird3.png');
        }
        else if(this.props.mode===3){
            var url=require('../images/bg/pet3.png');
        }

        return (
            <Image source={url} style = {styles.background}>
                <NavigationContainer navigate={navigate} title='Upcoming'>
                    <CalendarStrip/>
                    <PostList duration='upcoming'/>

                    <Fab
                        active={this.state.fabActive}
                        containerStyle={styles.fabContainer}
                        style={styles.fab}
                        position="bottomRight"
                        onPress={this.handleFabClose}>
                        <Icon name='plus'/>
                    </Fab>

                </NavigationContainer>
            </Image>

        )
    };

    handleFabClose() {
        this.setState({fabActive: !this.state.fabActive});
        this.props.navigation.navigate('AddEvent');
    }
}
const styles = {
  background:{
    resizeMode: 'cover',
    width:null,
    height:null,
    flex: 1
    },
    fab: {
        backgroundColor: appColors.primary,
        opacity: 0.5
    }
};


export default connect((state, ownProps) => ({
    mode:state.theme.mode,
}))(UpcomingScreen);
