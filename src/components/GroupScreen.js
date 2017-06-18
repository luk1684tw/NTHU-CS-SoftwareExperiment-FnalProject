import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import NavigationContainer from './NavigationContainer';
import {Fab, Button, Toast, Left, Body, Right, ListItem, Container, Content} from 'native-base';
import {connect} from 'react-redux';
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
    handleFabClose() {
        this.setState({fabActive: !this.state.fabActive});
        this.props.navigation.navigate('AddEvent');
    }
    render () {
        const {groupScreenName} = this.props;
        const{navigate}=this.props.navigation;
        return (
          <NavigationContainer navigate={navigate} title='Group'>
              <View style={styles.header}/>
              <View style={styles.header_title}>
                  <Icon name='star' size={30} style={styles.header_icon} />
                  <Text style={{fontSize:22}}>{groupScreenName}</Text>
             </View>
             <Fab
                 active={this.state.fabActive}
                 containerStyle={styles.fabContainer}
                 style={styles.fab}
                 position="bottomRight"
                 onPress={this.handleFabClose}>
                <Icon name='plus'/>
             </Fab>
          </NavigationContainer>
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
};
export default connect((state, ownProps) => ({
    groupScreenName: state.group.groupScreenName
}))(GroupScreen);
