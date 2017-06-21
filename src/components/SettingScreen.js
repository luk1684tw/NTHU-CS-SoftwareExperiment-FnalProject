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
            <NavigationContainer navigate={navigate} title='Today' style={{flex:1}}>
                <View style={{backgroundColor:'steelblue', height:50}}>
                    <Text style={{color:'white', marginLeft:15, marginTop:'auto', marginBottom:'auto',fontWeight:'bold',fontSize:20}}>Settings</Text>
                </View>
                <View>
                    <SettingsList borderColor='#d6d5d9' defaultItemSize={50}>
                        <SettingsList.Item
                            hasNavArrow={false}
                            title='Perference'
                            titleStyle={{color:'steelblue', marginBottom:10, fontWeight:'500'}}
                            itemWidth={50}
                            borderHide={'Both'}
                        />
                        <SettingsList.Item
                            icon={
                                <View style={styles.imageStyle}>
                                    <Image style={{alignSelf:'center',height:22, width:22}} source={require('../images/interface.png')}/>
                                </View>
                            }
                            hasNavArrow={true}
                            itemWidth={70}
                            titleStyle={{color:'steelblue', fontSize: 16, fontWeight:'bold',backgroundColor:'transparent'}}
                            title='Theme'
                            onPress={() => navigate('ChooseColor')}
                        />
                        <SettingsList.Item
                            icon={
                                <View style={styles.imageStyle}>
                                    <Image style={{alignSelf:'center',height:22, width:22}} source={require('../images/more.png')}/>
                                </View>
                            }
                            title='More'
                            itemWidth={70}
                            titleStyle={{color:'steelblue', fontSize: 16, fontWeight:'bold'}}
                            hasNavArrow={false}
                        />
                        <SettingsList.Header headerStyle={{marginTop:-5}}/>
                        <SettingsList.Item
                          hasNavArrow={false}
                          title='Other'
                          titleStyle={{color:'steelblue', marginBottom:10, fontWeight:'bold'}}
                          itemWidth={70}
                          borderHide={'Both'}
                        />
                        <SettingsList.Item
                          icon={
                            <View style={styles.imageStyle}>
                              <Image style={{alignSelf:'center',height:22, width:22}} source={require('../images/intro.png')}/>
                            </View>
                          }
                          title='Introduction'
                          itemWidth={70}
                          titleStyle={{color:'steelblue', fontSize: 16,fontWeight:'bold'}}
                          hasNavArrow={false}
                          onPress={() => navigate('Intro')}
                        />
                        <SettingsList.Item
                            icon={
                              <View style={styles.imageStyle}>
                                <Image style={{alignSelf:'center',height:28, width:30}} source={require('../images/contact.png')}/>
                              </View>
                            }
                            title='Developer'
                            itemWidth={70}
                            titleStyle={{color:'steelblue', fontSize: 16,fontWeight:'bold'}}
                            hasNavArrow={false}
                            onPress={() => navigate('Developer')}
                        />
                        <SettingsList.Header headerStyle={{marginTop: -5}}/>
                    </SettingsList>
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
    width:24,
    height:24,
    justifyContent:'center',
    opacity:0.7,
    backgroundColor:'transparent'
  },
});
