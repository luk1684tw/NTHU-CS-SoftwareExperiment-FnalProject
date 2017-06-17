import React from 'react';

import {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  Alert
} from 'react-native';
import SettingsList from 'react-native-settings-list';
import NavigationContainer from './NavigationContainer';

export default class SettingScreen extends React.Component{

    constructor(props){
        super(props);
        this.onValueChange = this.onValueChange.bind(this);
        this.state = {
          switchValue: false,
        };
    }

    render() {
      const {navigate} = this.props.navigation;
      return (
          <NavigationContainer navigate={navigate} title='Today'>
            <View style={{backgroundColor:'gray',flex:1}}>
              <View style={{flex:1, marginTop:50}}>
                <SettingsList>
                	<SettingsList.Header headerText='First Grouping' headerStyle={{color:'white'}}/>
                  <SettingsList.Item
                    hasNavArrow={false}
                    switchState={this.state.switchValue}
                    switchOnValueChange={this.onValueChange}
                    hasSwitch={true}
                    title='Switch Example'/>
                  <SettingsList.Item
                    title='Different Colors Example'
                    backgroundColor='#D1D1D1'
                    titleStyle={{color:'blue'}}
                    arrowStyle={{tintColor:'blue'}}
                    onPress={() => Alert.alert('Different Colors Example Pressed')}/>
                  <SettingsList.Header headerText='Different Grouping' headerStyle={{color:'white', marginTop:50}}/>
                  <SettingsList.Item titleInfo='Some Information' hasNavArrow={false} title='Information Example'/>
                  <SettingsList.Item title='Settings 1'/>
                  <SettingsList.Item title='Settings 2'/>
                </SettingsList>
              </View>
            </View>
          </NavigationContainer>
        );
    }

    onValueChange(value){
      this.setState({
        switchValue: value
      });
    }
}

const styles =StyleSheet.create({
  imageStyle:{
    marginLeft:15,
    alignSelf:'center',
    height:30,
    width:30
  },
  titleInfoStyle:{
    fontSize:16,
    color: '#8e8e93'
  }
});
