import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import InfiniteScrollView from 'react-native-infinite-scroll-view';

import {Fab, Button, Toast, Left, Body, Right, ListItem, Container, Content} from 'native-base';
import appColors from '../styles/colors';
import appMetrics from '../styles/metrics';
import {getMoodIcon} from '../utilities/weather.js';
import NavigationContainer from './NavigationContainer';
import PostList from './PostList';
import PostItem from './PostItem';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {connect} from 'react-redux';
import {selectMood} from '../states/post-actions';
import {setToast} from '../states/toast';

class TodayScreen extends React.Component {
    static propTypes = {
        creatingPost: PropTypes.bool.isRequired,
        creatingVote: PropTypes.bool.isRequired,
        toast: PropTypes.string.isRequired,
        dispatch: PropTypes.func.isRequired,
    };



    constructor(props) {
        super(props);

        this.state = {
            fabActive: false,
            day:'THU'
        };
        this.componentDidMount = this.componentDidMount.bind(this);
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
        return (
            <NavigationContainer navigate={navigate} title='Today'>
                <View style={styles.header_title}>
                  <View style={styles.date}>
                    <Text style={{fontSize:15,color: 'white',fontWeight:'bold'}}>  {this.state.day}</Text>
                    <Text style={{fontSize:20,color: 'white'}}>  {new Date().getDate()}</Text>
                  </View>
                  <Text style={styles.today}>TODAY</Text>
               </View>
               <PostList/>
               <Fab
                   active={this.state.fabActive}
                   containerStyle={styles.fabContainer}
                   style={styles.fab}
                   position="bottomRight"
                   onPress={this.handleFabClose}>
                  <Icon name='plus'/>
               </Fab>
            </NavigationContainer>
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
        backgroundColor: appColors.primary
    },
    date:{
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft:60,
    },
    today:{
      marginLeft: 40,
      color:'white',
      fontSize:35,
    },
    header_title: {
        height:120,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'cornflowerblue',
        opacity:0.5,
        top:0,
    },
};

export default connect((state, ownProps) => ({
    creatingPost: state.post.creatingPost,
    creatingVote: state.post.creatingVote,
    toast: state.toast
}))(TodayScreen);
