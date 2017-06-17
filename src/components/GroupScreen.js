import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import NavigationContainer from './NavigationContainer';
import {connect} from 'react-redux';
class GroupScreen extends React.Component{
    static propTypes = {
        groupScreenName: PropTypes.string,
        dispatch: PropTypes.func.isRequired
    };
    render () {
        const {navigate, groupScreenName} = this.props.navigation;
        return (
          <NavigationContainer navigate={navigate} title='Group'>
              <View style={styles.header}/>
              <View style={styles.header_title}>
                  <Icon name='star' size={30} style={styles.header_icon} />
                  <Text style={{fontSize:22}}>{groupScreenName}</Text>
             </View>
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
    }
};
export default connect((state, ownProps) => ({
    groupScreenName: state.group.groupScreenName
}))(GroupScreen);
