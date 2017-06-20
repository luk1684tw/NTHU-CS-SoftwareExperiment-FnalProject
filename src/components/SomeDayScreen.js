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
        this.handleOnClickCo = this.handleOnClickCo.bind(this);
        this.handleOnClickSi = this.handleOnClickSi.bind(this);
        this.handleOnClickGo = this.handleOnClickGo.bind(this);
        this.handleOnClickCoBuEv = this.handleOnClickCoBuEv.bind(this);
        this.handleOnClickSiBuEv = this.handleOnClickSiBuEv.bind(this);
        this.handleOnClickGoBuEv = this.handleOnClickGoBuEv.bind(this);
        this.handleOnClickCoBuGr = this.handleOnClickCoBuGr.bind(this);
        this.handleOnClickSiBuGr = this.handleOnClickSiBuGr.bind(this);
        this.handleOnClickGoBuGr = this.handleOnClickGoBuGr.bind(this);
      }

      handleOnClickCo(){
        this.setState({
          opacityco: 1 //Anything u want
        });
      }
      handleOnClickSi(){
        this.setState({
          opacitysi: 1 //Anything u want
        });
      }
      handleOnClickGo(){
        this.setState({
          opacitygo: 1 //Anything u want
        });
      }
      handleOnClickCoBuEv(){
        this.setState({
          opacitycobuev: 1 //Anything u want
        });
      }
      handleOnClickSiBuEv(){
        this.setState({
          opacitysibuev: 1 //Anything u want
        });
      }
      handleOnClickGoBuEv(){
        this.setState({
          opacitygobuev: 1 //Anything u want
        });
      }
      handleOnClickCoBuGr(){
        this.setState({
          opacitycobugr: 1 //Anything u want
        });
      }
      handleOnClickSiBuGr(){
        this.setState({
          opacitysibugr: 1 //Anything u want
        });
      }
      handleOnClickGoBuGr(){
        this.setState({
          opacitygobugr: 1 //Anything u want
        });
      }


    render () {
      const {navigate} = this.props.navigation;
      if(this.props.mode===0){
          var url= require('../images/bg/plant1.png');
      }
      else if(this.props.mode===1){
          var url=require('../images/bg/pet1.png');
      }
      else if(this.props.mode===2){
          var url=require('../images/bg/summer.png');
      }
      else if(this.props.mode===3){
          var url=require('../images/bg/bird1.png');
      }

        return (
                <Image source={url} style = {styles.background}>
                <NavigationContainer navigate={navigate} title='Today'>
                  <ScrollView>
                  <ListItem style = {styles.list}>
                  <TouchableOpacity onPress={()=>{this.handleOnClickCo()}}>
                  <Image source={require('../images/cocup.png')} style = {[styles.cup,{opacity:this.state.opacityco}]}/>
                  </TouchableOpacity>
                  <Text style = {styles.text}>完成事件1次</Text>
                  </ListItem>
                  <ListItem style = {styles.list}>
                  <TouchableOpacity onPress={()=>{this.handleOnClickSi()}}>
                  <Image source={require('../images/sicup.png')} style = {[styles.cup,{opacity:this.state.opacitysi}]}/>
                  </TouchableOpacity>
                  <Text style = {styles.text}>完成事件10次</Text>
                  </ListItem>
                  <ListItem style = {styles.list}>
                  <TouchableOpacity onPress={()=>{this.handleOnClickGo()}}>
                  <Image source={require('../images/gcup.png')} style = {[styles.cup,{opacity:this.state.opacitygo}]}/>
                  </TouchableOpacity>
                  <Text style = {styles.text}>完成事件100次</Text>
                  </ListItem>
                  <ListItem style = {styles.list}>
                  <TouchableOpacity onPress={()=>{this.handleOnClickCoBuEv()}}>
                  <Image source={require('../images/cocup.png')} style = {[styles.cup,{opacity:this.state.opacitycobuev}]}/>
                  </TouchableOpacity>
                  <Text style = {styles.text}>創建事件1次</Text>
                  </ListItem>
                  <ListItem style = {styles.list}>
                  <TouchableOpacity onPress={()=>{this.handleOnClickSiBuEv()}}>
                  <Image source={require('../images/sicup.png')} style = {[styles.cup,{opacity:this.state.opacitysibuev}]}/>
                  </TouchableOpacity>
                  <Text style = {styles.text}>創建事件10次</Text>
                  </ListItem>
                  <ListItem style = {styles.list}>
                  <TouchableOpacity onPress={()=>{this.handleOnClickGoBuEv()}}>
                  <Image source={require('../images/gcup.png')} style = {[styles.cup,{opacity:this.state.opacitygobuev}]}/>
                  </TouchableOpacity>
                  <Text style = {styles.text}>創建事件100次</Text>
                  </ListItem>
                  <ListItem style = {styles.list}>
                  <TouchableOpacity onPress={()=>{this.handleOnClickCoBuGr()}}>
                  <Image source={require('../images/cocup.png')} style = {[styles.cup,{opacity:this.state.opacitycobugr}]}/>
                  </TouchableOpacity>
                  <Text style = {styles.text}>創建群組1次</Text>
                  </ListItem>
                  <ListItem style = {styles.list}>
                  <TouchableOpacity onPress={()=>{this.handleOnClickSiBuGr()}}>
                  <Image source={require('../images/sicup.png')} style = {[styles.cup,{opacity:this.state.opacitysibugr}]}/>
                  </TouchableOpacity>
                  <Text style = {styles.text}>創建群組5次</Text>
                  </ListItem>
                  <ListItem style = {styles.list}>
                  <TouchableOpacity onPress={()=>{this.handleOnClickGoBuGr()}}>
                  <Image source={require('../images/gcup.png')} style = {[styles.cup,{opacity:this.state.opacitygobugr}]}/>
                  </TouchableOpacity>
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
    mode:state.theme.mode,
}))(SomeDayScreen);
