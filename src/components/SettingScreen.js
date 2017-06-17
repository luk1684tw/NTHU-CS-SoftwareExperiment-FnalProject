import React from 'react';

import {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  Navigator
} from 'react-native';
import SettingsList from 'react-native-settings-list';
import NavigationContainer from './NavigationContainer';


export default class SettingScreen extends React.Component{

    constructor(props){
        super(props);
    }

    render() {
      const {navigate} = this.props.navigation;
      return (
          <NavigationContainer navigate={navigate} title='Today'>

            <View style={{backgroundColor:'yellow',flex:1}}>
        <View style={{borderBottomWidth:1, backgroundColor:'black',borderColor:'#c8c7cc'}}>
          <Text style={{color:'white',marginTop:15,marginBottom:15, marginLeft:15,fontWeight:'bold',fontSize:20, fontFamily:'Iowan Old Style'}}>Settings</Text>
        </View>
        <View style={{backgroundColor:'#f6f6f6',flex:1}}>
          <SettingsList borderColor='#d6d5d9' defaultItemSize={50}>
            <SettingsList.Item
              hasNavArrow={false}
              title='自訂'
              titleStyle={{color:'#009688', marginBottom:10, fontWeight:'500'}}
              itemWidth={50}
              borderHide={'Both'}
            />
            <SettingsList.Item
              icon={
                <View style={styles.imageStyle}>
                  <Image style={{alignSelf:'center',height:22, width:22}} source={require('../images/apps.png')}/>
                </View>
              }
              hasNavArrow={true}
              itemWidth={70}
              titleStyle={{color:'black', fontSize: 16}}
              title='換個背景吧！'
              onPress={() => navigate('ChooseColor')}
            />
            <SettingsList.Item
              icon={
                <View style={styles.imageStyle}>
                  <Image style={{alignSelf:'center',height:4, width:18}} source={require('../images/apps.png')}/>
                </View>
              }
              title='More'
              itemWidth={70}
              titleStyle={{color:'black', fontSize: 16, fontFamily:'Roboto'}}
              hasNavArrow={false}
            />
            <SettingsList.Header headerStyle={{marginTop:-5}}/>
            <SettingsList.Item
              hasNavArrow={false}
              title='Other'
              titleStyle={{color:'#009688', marginBottom:10, fontWeight:'bold'}}
              itemWidth={70}
              borderHide={'Both'}
            />
            <SettingsList.Item
              icon={
                <View style={styles.imageStyle}>
                  <Image style={{alignSelf:'center',height:22, width:22}} source={require('../images/apps.png')}/>
                </View>
              }
              title='使用說明'
              itemWidth={70}
              titleStyle={{color:'black', fontSize: 16}}
              hasNavArrow={false}
            />
            <SettingsList.Item
              icon={
                <View style={styles.imageStyle}>
                  <Image style={{alignSelf:'center',height:22, width:22}} source={require('../images/apps.png')}/>
                </View>
              }
              title='開發團隊'
              itemWidth={70}
              titleStyle={{color:'black', fontSize: 16, fontFamily: 'Roboto'}}
              hasNavArrow={false}

            />
            <SettingsList.Header headerStyle={{marginTop: -5}}/>
          </SettingsList>
        </View>
      </View>
          </NavigationContainer>
        );
    }

}

const styles = StyleSheet.create({
  imageStyle:{
    marginLeft:15,
    marginRight:20,
    alignSelf:'center',
    width:20,
    height:24,
    justifyContent:'center'
  }
});
