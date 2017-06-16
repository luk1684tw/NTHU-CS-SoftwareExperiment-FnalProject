import React from 'react';
import {Text} from 'react-native';
import NavigationContainer from './NavigationContainer';
export default class CreateGroupScreen extends React.Component{
    render () {
        const {navigate} = this.props.navigation;
        return (
            <NavigationContainer navigate={navigate} title='CreateGroup'>
                <Text style={styles}>This is Screen for create Group</Text>
            </NavigationContainer>
        );
    };
}
const styles = {
    fontSize: 16,
    alignItems: 'center'
};
