import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Header, Container, Item, Input, Content, Thumbnail,Label, Badge, Button, Text as NbText, List, ListItem, Separator, Left, Body, Right,Toast} from 'native-base';
import appColors from '../styles/colors';
import {setGroupScreenName, createGroup, listEvents, listGroups, Animated} from '../states/event-actions';
import {toggleGroupNameModal, setGroupNameText} from '../states/groupName';
import {connect} from 'react-redux';

class GroupList extends React.Component{
    static propTypes={
        navigate: PropTypes.func.isRequired,
        groups: PropTypes.array.isRequired,
        groupNameText: PropTypes.string.isRequired,
        groupScreenName: PropTypes.string.isRequired,
        modalToggle: PropTypes.bool.isRequired,
        dispatch: PropTypes.func.isRequired,
    }
    constructor(props){
        super(props);
        this.handleOnClick=this.handleOnClick.bind(this);
    }
    handleOnClick(item){
        this.props.dispatch(setGroupScreenName(item));
        // console.log(item, this.props.groupScreenName);
        this.props.dispatch(listEvents(this.props.groupScreenName));
        this.props.navigate('Group');
        // this.props.dispatch(setGroupScreenName(item));
    }
    render(){
        const {navigate, dispatch, modalToggle, groupNameText, groups} = this.props;
        let children=(
          <ListItem>
              <Icon name='tag-multiple' size={24}/>
              <Text style={styles.text}>新增群組</Text>
          </ListItem>
        );
        if(groups.length){
            children=(
                <List dataArray={groups}
                renderRow={(group) =>
                    <ListItem button onPress={() =>  {this.handleOnClick(group)}}>
                        <Icon name='tag-multiple' size={20}/>
                        <Text style={styles.text}>{group}</Text>
                    </ListItem>
                }>
                </List>
            );
        }
        return(
            <View style={{flex:1}}>{children}</View>
        );
    }
}
const styles = {
    text: {
        color: appColors.primaryLightText,
        fontSize: (Platform.OS === 'ios') ? 10 : 12,
        fontWeight: 'bold',
        flex: 1,
        marginHorizontal: 12,

    },
};
export default connect((state, ownProps) => ({
    groupScreenName: state.group.groupScreenName,
    groupNameText: state.groupName.groupNameText,
    groups: state.group.groups,
    modalToggle: state.groupName.modalToggle,
    pictureNum: state.corgi.pictureNum
}))(GroupList);
