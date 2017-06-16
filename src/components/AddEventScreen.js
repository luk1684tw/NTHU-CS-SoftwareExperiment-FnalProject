import React from 'react';
import {Text} from 'react-native';

export default class AddEventScreen extends React.Component{
    render () {
        return (
            <Text style={styles}>Add Some Event</Text>
        );
    };
}
const styles = {
    fontSize: 50,
    alignItems: 'center'
};
