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
        dispatch: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            fabActive: false
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

    render() {
        const {navigate} = this.props.navigation;
        return (
            <NavigationContainer navigate={navigate} title='Today'>

                <View style={styles.header}/>
                <View style={styles.header_title}>
                    <Icon name='star' size={30} style={styles.header_icon} />
                    <Text style={{fontSize:22}}>今天</Text>
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
    header: {
        height:30
    },
    header_title: {
        height:30,
        flexDirection:'row',
        justifyContent:'center'
    },
    header_icon: {
        color:'rgb(226, 217, 10)' ,
        marginRight:10
    },
};

export default connect((state, ownProps) => ({
    creatingPost: state.post.creatingPost,
    creatingVote: state.post.creatingVote,
    toast: state.toast
}))(TodayScreen);
