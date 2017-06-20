import React from 'react';
import {Text,Image,ScrollView,TouchableOpacity} from 'react-native';
import NavigationContainer from './NavigationContainer';
import PostList from './PostList.js';
import CalendarStrip from 'react-native-calendar-strip';
import {List, ListItem} from 'native-base';
import {connect} from 'react-redux';


class SomeDayScreen extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            opacityco: 0.3,
            opacitysi:0.3,
            opacitygo:0.3,
            opacitycobuev: 0.3,
            opacitysibuev:0.3,
            opacitygobuev:0.3,
            opacitycobugr: 0.3,
            opacitysibugr:0.3,
            opacitygobugr:0.3
        }
    }


    render () {
        const {navigate} = this.props.navigation;
        if(this.props.mode===0){
            var url=require('../images/bg/season4.png');
        }
        else if(this.props.mode===1){
            var url=require('../images/bg/plant4.png');
        }
        else if(this.props.mode===2){
            var url=require('../images/bg/p1.png');
        }
        else if(this.props.mode===3){
            var url=require('../images/bg/pet4.png');
        }
        console.log('test',this.props.groups.length);

        if(this.props.groups.length >= 1){
            this.state.opacitycobugr= 1;
            if (this.props.groups.length >= 5) {
                this.state.opacitysibugr= 1;
                if (this.props.groups.length >= 10) {
                    this.state.opacitygobugr= 1;
                }
            }
        }

        if(this.props.events.length >= 1){
            this.state.opacitycobuev= 1;
            if (this.props.events.length >= 10) {
                this.state.opacitysibuev= 1;
                if (this.props.events.length >= 100) {
                    this.state.opacitygobuev= 1;
                }
            }
        }
        

        console.log('groupNum',this.props.groupNum);

        return (
            <Image source={url} style = {styles.background}>
                <NavigationContainer navigate={navigate} title='Today'>
                    <ScrollView>

                        <ListItem style = {styles.list}>
                            <Image source={require('../images/cocup.png')} style = {[styles.cup,{opacity:this.state.opacityco}]}/>
                            <Text style = {styles.text}>完成事件1次</Text>
                        </ListItem>

                        <ListItem style = {styles.list}>
                            <Image source={require('../images/sicup.png')} style = {[styles.cup,{opacity:this.state.opacitysi}]}/>
                            <Text style = {styles.text}>完成事件10次</Text>
                        </ListItem>

                        <ListItem style = {styles.list}>
                            <Image source={require('../images/gcup.png')} style = {[styles.cup,{opacity:this.state.opacitygo}]}/>
                            <Text style = {styles.text}>完成事件100次</Text>
                        </ListItem>

                        <ListItem style = {styles.list}>
                            <Image source={require('../images/cocup.png')} style = {[styles.cup,{opacity:this.state.opacitycobuev}]}/>
                            <Text style = {styles.text}>創建事件1次</Text>
                        </ListItem>

                        <ListItem style = {styles.list}>
                            <Image source={require('../images/sicup.png')} style = {[styles.cup,{opacity:this.state.opacitysibuev}]}/>
                            <Text style = {styles.text}>創建事件10次</Text>
                        </ListItem>

                        <ListItem style = {styles.list}>
                            <Image source={require('../images/gcup.png')} style = {[styles.cup,{opacity:this.state.opacitygobuev}]}/>
                            <Text style = {styles.text}>創建事件100次</Text>
                        </ListItem>

                        <ListItem style = {styles.list}>
                            <Image source={require('../images/cocup.png')} style = {[styles.cup,{opacity:this.state.opacitycobugr}]}/>
                            <Text style = {styles.text}>創建群組1次</Text>
                        </ListItem>

                        <ListItem style = {styles.list}>
                            <Image source={require('../images/sicup.png')} style = {[styles.cup,{opacity:this.state.opacitysibugr}]}/>
                            <Text style = {styles.text}>創建群組5次</Text>
                        </ListItem>

                        <ListItem style = {styles.list}>
                            <Image source={require('../images/gcup.png')} style = {[styles.cup,{opacity:this.state.opacitygobugr}]}/>
                            <Text style = {styles.text}>創建群組10次</Text>
                        </ListItem>

                    </ScrollView>
                </NavigationContainer>
            </Image>
        );
    };
}

const styles = {
  background:{
    resizeMode: 'cover',
    width:null,
    height:null,
    flex:1
  },
  list:{
    marginLeft: 40,
    height:70
  },
  cup:{
    width:30,
    height:40,
    alignSelf: 'flex-end',
    marginRight: 20,
    marginTop: 15,
  },
  text:{
    alignItems: 'flex-start',
  }
};

export default connect((state, ownProps) => ({
    mode: state.theme.mode,
    groups: state.group.groups,
    events: state.event.events
}))(SomeDayScreen);
