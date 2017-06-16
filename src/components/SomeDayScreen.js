import React from 'react';
import {Text} from 'react-native';
import NavigationContainer from './NavigationContainer';
export default class SomeDayScreen extends React.Component{
    render () {
      const {navigate} = this.props.navigation;
        return (
            <NavigationContainer navigate={navigate} title='Today'>
                <Text style={styles}>Test</Text>
            </NavigationContainer>
        );
    };
}
const styles = {
    fontSize: 16,
    alignItems: 'center'
};
