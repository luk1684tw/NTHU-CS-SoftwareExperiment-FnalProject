import React from 'react';
import PropTypes from 'prop-types';
import {View, Image} from 'react-native';
import {Container, Icon, Fab, Button, Toast} from 'native-base';
import NavigationContainer from './NavigationContainer.js';


export default class TodayScreen extends React.Component {

    constructor(props){
        super(props);
    }
    render() {
        const {navigate} = this.props.navigation;
        return (
            <NavigationContainer navigate={navigate}/>
        )
    }
}
