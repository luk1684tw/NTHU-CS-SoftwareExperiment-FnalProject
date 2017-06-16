import React from 'react';
import {Text} from 'react-native';

export default class SettingScreen extends React.Component{
    render () {
        return (
            <Text style={styles}>Setting</Text>
        );
    };
}
const styles = {
    fontSize: 16,
    alignItems: 'center'
};
