import React from 'react';
import {Text} from 'react-native';

export default class UpcomingScreen extends React.Component{
    render () {
        return (
            <Text style={styles}>Upcoming</Text>
        );
    };
}
const styles = {
    fontSize: 16,
    alignItems: 'center'
};
