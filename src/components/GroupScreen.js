import React from 'react';
import {Text} from 'react-native';

export default class GroupScreen extends React.Component{
    render () {
        return (
            <Text style={styles}>Group Screen</Text>
        );
    };
}
const styles = {
    fontSize: 16,
    alignItems: 'center'
};
