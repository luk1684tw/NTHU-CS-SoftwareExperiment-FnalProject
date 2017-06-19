import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableWithoutFeedback,Image} from 'react-native';
import InfiniteScrollView from 'react-native-infinite-scroll-view';

import {Fab, Button, Toast, Left, Body, Right, ListItem, Container, Content} from 'native-base';
import appColors from '../styles/colors';
import appMetrics from '../styles/metrics';
import {getMoodIcon} from '../utilities/weather.js';
import NavigationContainer from './NavigationContainer';
import PostList from './PostList';
import PostItem from './PostItem';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Timeline from 'react-native-timeline-listview';
import {connect} from 'react-redux';
import {selectMood} from '../states/post-actions';
import {setToast} from '../states/toast';
import CalendarStrip from 'react-native-calendar-strip';

class TodayScreen extends React.Component {
    static propTypes = {
        creatingPost: PropTypes.bool.isRequired,
        creatingVote: PropTypes.bool.isRequired,
        toast: PropTypes.string.isRequired,
        events: PropTypes.array,
        dispatch: PropTypes.func.isRequired,
    };



    constructor(props) {
        super(props);

        this.state = {
            fabActive: false,
            day:'THU'
        };

        this.handleFabClose = this.handleFabClose.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.toast) {
            Toast.show({
                text: nextProps.toast,
                position: 'bottom',
                duration: appMetrics.toastDuration
            })
            this.props.dispatch(setToast(''));
        }
    }

     componentDidMount(){
        if(new Date().getDay()===1){
          this.setState({day: "MON"});
        }
        else if(new Date().getDay()===2){
          this.setState({day: "TUE"});
        }
        else if(new Date().getDay()===3){
          this.setState({day: "WED"});
        }
        else if(new Date().getDay()===4){
          this.setState({day: "THU"});
        }
        else if(new Date().getDay()===5){
          this.setState({day: "FRI"});
        }
        else if(new Date().getDay()===6){
          this.setState({day: "SAT"});
        }
        else if(new Date().getDay()===0){
          this.setState({day: "SUN"});
        }
    }

    render() {
        const {navigate} = this.props.navigation;
        const {events}=this.props;
        return (
            <Image source={require('../images/summer.png')} style = {styles.background}>
                 <NavigationContainer navigate={navigate} title='Today' style={styles.todaynav}>

                <View style={styles.header_title}>
                  <View style={styles.date}>
                    <Text style={{fontSize:15,color: 'black',fontWeight:'bold'}}>  {this.state.day}</Text>
                    <Text style={{fontSize:20,color: 'black'}}>  {new Date().getDate()}</Text>
                  </View>
                  <Text style={styles.today}>TODAY</Text>
               </View>

               <PostList duration='today'/>

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
        );
    }

    handleFabClose() {
        this.setState({fabActive: !this.state.fabActive});
        this.props.navigation.navigate('AddEvent');
    }
}

const styles = {
    fabMask: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: appColors.mask
    },
    fabContainer: {
        marginLeft: 10
    },
    fab: {
        backgroundColor: appColors.primary,
        opacity: 0.5
    },
    date:{
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft:60,
    },
    today:{
      marginLeft: 40,
      color:'black',
      fontSize:35,
      fontWeight:'bold'
    },
    header_title: {
        height:70,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'transparent',
        opacity: 0.7,
        top:0,

    },
    todaynav:{

    },
    background:{
      resizeMode: 'cover',
      width:null,
      height:null,
      flex: 1
    }
};

export default connect((state, ownProps) => ({
    creatingPost: state.post.creatingPost,
    creatingVote: state.post.creatingVote,
    events: state.event.events,
    toast: state.toast
}))(TodayScreen);
