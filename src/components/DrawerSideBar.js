import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image, Platform, Modal} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Header, Container, Item, Input, Content, Thumbnail,Label, Badge, Button, Text as NbText, List, ListItem, Separator, Left, Body, Right} from 'native-base';
import appColors from '../styles/colors';
import {setGroupScreenName} from '../states/event-actions';
import {toggleGroupNameModal, setGroupNameText} from '../states/groupName';
import {connect} from 'react-redux';
class DrawerSideBar extends React.Component {
    static propTypes = {
        navigate: PropTypes.func.isRequired,
        groupScreenName: PropTypes.string.isRequired,
        groupNameText: PropTypes.string.isRequired,
        modalToggle: PropTypes.bool.isRequired,
        dispatch: PropTypes.func.isRequired
    };
    constructor(props){
        super(props);
        this.handleOnClick=this.handleOnClick.bind(this);
        this.handleOpenGroupName=this.handleOpenGroupName.bind(this);
        this.handleCloseGroupName=this.handleCloseGroupName.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleOnClick(item){
        this.props.dispatch(setGroupScreenName(item));
        // console.log(item, this.props.groupScreenName);
        this.props.navigate('Group');
        // this.props.dispatch(setGroupScreenName(item));
    }
    handleOpenGroupName(){
        // Todo: dynamic add group name
        this.props.dispatch(setGroupNameText(''));
        this.props.dispatch(toggleGroupNameModal());
    }
    handleCloseGroupName(){
        this.props.dispatch(setGroupNameText(''));
        this.props.dispatch(toggleGroupNameModal());
    }
    handleSubmit(e){
        if(e.nativeEvent.text){
            this.props.dispatch(setGroupNameText(e.nativeEvent.text));
            this.props.dispatch(toggleGroupNameModal());
        }
    }
    render() {
      const {navigate, dispatch, modalToggle, groupNameText} = this.props;
      //-----------------Group List Setting-----------------------
        var items=['和學妹出去玩', '和妹妹野餐', '和女友約會'];
        let children=(
          <ListItem>
              <Icon name='tag-multiple' size={30}/>
              <Text style={styles.text}>新增群組</Text>
          </ListItem>
        );
        if(items.length){
          children=(
              <List dataArray={items}
              renderRow={(item) =>
                  <ListItem button onPress={() =>  {this.handleOnClick(item)}}>
                      <Icon name='tag-multiple' size={30}/>
                      <Text style={styles.text}>{item}</Text>
                  </ListItem>
              }>
              </List>
          );
        }
      //----------------------------------------------------

      return (
        <Container style={styles.drawer}>
            <Content>
                <List>
                    {/* 代辦事項 */}
                    <ListItem itemDivider><Left><Text>待辦事項</Text></Left><Body></Body><Right></Right></ListItem>
                    <ListItem button onPress={() => navigate('Today')}>
                        <Icon name='bomb' size={30}/>
                        <Text style={styles.text}>今天</Text>
                    </ListItem>
                    <ListItem button onPress={() => navigate('Upcoming')}>
                        <Icon name='clock-alert' size={30}/>
                        <Text style={styles.text}>即將來臨</Text>
                    </ListItem>
                    <ListItem button onPress={() => navigate('SomeDay')}>
                        <Icon name='timetable' size={30}/>
                        <Text style={styles.text}>選擇一天</Text>
                    </ListItem>
                    {/* 群組 */}
                    <ListItem itemDivider>
                            <Left><Text>群組</Text></Left>
                            <Body></Body>
                            <Right>
                                {/* TODO: Add Group Name Button */}
                                {(modalToggle)?
                                    <Icon name='window-close' size={20}
                                    onPress={this.handleOpenGroupName} />:
                                    <Icon name='tag-plus' size={20}
                                        onPress={this.handleCloseGroupName} />}
                            </Right>
                    </ListItem>
                    {(modalToggle===false)?<Text></Text>:<ListItem>
                        <Item >
                               <Input placeholder='請輸入群組名稱 '
                                   defaultValue={groupNameText}
                                   onEndEditing={this.handleSubmit}/>
                               <Button transparent success onPress={this.handleSubmit}><Text>新增</Text></Button>
                        </Item>
                    </ListItem>}
                    {children}
                    {/* 設定 */}
                    <ListItem itemDivider><Left><Text>設定</Text></Left><Body></Body><Right></Right></ListItem>
                    <ListItem button onPress={() => navigate('Setting')}>
                        <Icon name='settings-box' size={30}/>
                        <Text style={styles.text}>個人設定</Text>
                    </ListItem>
                </List>
            </Content>
        </Container>
    );
    }
    foo(item){
        console.log(item);
    }
}

const styles = {
    drawer: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        width: undefined,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#666',
        marginBottom: 16
    },
    header_title: {
        flexDirection:'row',
        justifyContent:'center'
    },
    item: {
        alignItems: 'center'
    },
    icon: {
        color: appColors.primaryLightText
    },
    text: {
        color: appColors.primaryLightText,
        fontSize: (Platform.OS === 'ios') ? 17 : 19,
        fontWeight: 'bold',
        flex: 1,
        marginHorizontal: 12
    },
    title:{
        backgroundColor: 'rgb(255, 219, 251)',
        fontSize: (Platform.OS === 'ios')?17:19
    }
};
export default connect((state, ownProps) => ({
    groupScreenName: state.group.groupScreenName,
    groupNameText: state.groupName.groupNameText,
    modalToggle: state.groupName.modalToggle
}))(DrawerSideBar);
