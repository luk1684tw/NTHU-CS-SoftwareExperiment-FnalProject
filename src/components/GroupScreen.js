import React from 'react';
import {Text} from 'react-native';
import NavigationContainer from './NavigationContainer';
export default class GroupScreen extends React.Component{
    render () {
        const {navigate} = this.props.navigation;
        return (
          <NavigationContainer navigate={navigate} title='Group'>
              <Text style={styles}>This is Screen for Group</Text>
          </NavigationContainer>

        );
    };
}
const styles = {
    fontSize: 16,
    alignItems: 'center'
};
