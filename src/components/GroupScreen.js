import React from 'react';
import PropTypes from 'prop-types';
import {Text, View,Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import NavigationContainer from './NavigationContainer';
import {Fab, Button, Toast, Left, Body, Right, ListItem, Container, Content} from 'native-base';
import {connect} from 'react-redux';
import PostList from './PostList';
import {listEvents, selectGroup} from '../states/event-actions';
class GroupScreen extends React.Component{
    static propTypes = {
        navigation: PropTypes.object.isRequired,
        groupScreenName: PropTypes.string,
        dispatch: PropTypes.func.isRequired
    };
    constructor(props) {
        super(props);

        this.state = {
            fabActive: false,
        };
        this.handleFabClose = this.handleFabClose.bind(this);
    }
    componentDidMount(){
        // this.props.dispatch(listEvents(this.props.groupScreenName,-1,-1));
    }
    handleFabClose() {
        this.setState({fabActive: !this.state.fabActive});
        this.props.navigation.navigate('AddEvent');
    }
    render () {
        const {groupScreenName} = this.props;
        console.log('groupScreenName :',groupScreenName);
        const{navigate}=this.props.navigation;

        if(this.props.mode===0){
            var url= require('../images/bg/season1.png');
        }
        else if(this.props.mode===1){
            var url=require('../images/bg/plant1.png');
        }
        else if(this.props.mode===2){
            var url=require('../images/bg/bird1.png');
        }
        else if(this.props.mode===3){
            var url=require('../images/bg/pet1.png');
        }

        return (
          <Image source={url} style = {styles.background}>
          <NavigationContainer navigate={navigate} title='Group'>
              <View style={styles.header}/>
              <View style={styles.header_title}>
                  <Icon name='star' size={30} style={styles.header_icon} />
                  <Text style={{fontSize:22}}>{groupScreenName}</Text>
             </View>
             <PostList duration='group'/>
             <Fab
                 active={this.state.fabActive}
                 containerStyle={styles.fabContainer}
                 style={styles.fab}
                 position="bottomRight"
                 onPress={this.handleFabClose}>
                <Icon name='plus'/>
             </Fab>
          </NavigationContainer>
        </Image>
        );
    };
}
const styles = {
    header: {
        height:30
    },
    header_title: {
        height:30,
        flexDirection:'row',
        justifyContent:'center'
    },
    header_icon: {
        color:'rgb(255, 244, 0)' ,
        marginRight:10
    },
    fabMask: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: appColors.mask
    },
    fabContainer: {
        marginLeft: 10
    },
    fab: {
        backgroundColor: appColors.primary
    },
    background:{
      resizeMode: 'cover',
      width:null,
      height:null,
      flex: 1,
    }
};
export default connect((state, ownProps) => ({
    groupScreenName: state.group.groupScreenName,
    mode:state.theme.mode
}))(GroupScreen);
