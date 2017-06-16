import React from 'react';
import {Text} from 'react-native';
import NavigationContainer from './NavigationContainer';
export default class SettingScreen extends React.Component{
    render () {
      const {navigate}=this.props.navigation;
        return (
          <NavigationContainer navigate={navigate} title='Upcoming'>
              <Text style={styles}>設定測試頁</Text>
          </NavigationContainer>
        );
    };
}
const styles = {
    fontSize: 16,
    alignItems: 'center'
};
