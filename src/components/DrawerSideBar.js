import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image, Platform, Modal,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Header, Container, Item, Input, Content, Thumbnail,Label, Badge, Button, Text as NbText, List, ListItem, Separator, Left, Body, Right} from 'native-base';
import appColors from '../styles/colors';
import {setGroupScreenName, createGroup,Animated} from '../states/event-actions';
import {toggleGroupNameModal, setGroupNameText} from '../states/groupName';
import {connect} from 'react-redux';

class DrawerSideBar extends React.Component {
    static propTypes = {
        navigate: PropTypes.func.isRequired,
        groups: PropTypes.array.isRequired,
        groupScreenName: PropTypes.string.isRequired,
        groupNameText: PropTypes.string.isRequired,
        modalToggle: PropTypes.bool.isRequired,
        dispatch: PropTypes.func.isRequired,
        pictureNum: PropTypes.number.isRequired
    };
    constructor(props){
        super(props);
        this.handleOnClick=this.handleOnClick.bind(this);
        this.handleOpenGroupName=this.handleOpenGroupName.bind(this);
        this.handleCloseGroupName=this.handleCloseGroupName.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleOnClickCorgi=this.handleOnClickCorgi.bind(this);
        this.images = [
          require('../images/corgi-24.png'),
          require('../images/corgi-25.png'),
          require('../images/corgi-26.png'),
          require('../images/corgi-27.png'),
          require('../images/corgi-28.png'),
          require('../images/corgi-29.png'),
          require('../images/corgi-30.png'),
          require('../images/corgi-31.png'),
          require('../images/corgi-32.png'),
          require('../images/corgi-33.png'),
          require('../images/corgi-34.png'),
          require('../images/corgi-35.png'),
          require('../images/corgi-36.png'),
          require('../images/corgi-37.png'),
          require('../images/corgi-38.png'),
          require('../images/corgi-39.png'),
          require('../images/corgi-40.png'),
          require('../images/corgi-41.png'),
        ];
        this.next = this.next.bind(this);
        this.state = {index: 0};
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
            this.props.dispatch(createGroup(e.nativeEvent.text));
            this.props.dispatch(setGroupNameText(e.nativeEvent.text));
            this.props.dispatch(toggleGroupNameModal());
        }
    }

    handleOnClickCorgi(){
      clearInterval(this.interval);
      this.next();
    }

    componentWillReceiveProps(){
      if(this.props.pictureNum == 44 ){
            clearInterval(this.interval);
          }
    }

    next() {
        this.interval = setTimeout(() => {
            this.setState({index: (this.state.index+1)%18});
            this.next();
        }, 50);
    }



    render() {
      const {navigate, dispatch, modalToggle, groupNameText, groups , pictureNum} = this.props;
      //-----------------Group List Setting-----------------------
        //var items=['和學妹出去玩', '和妹妹野餐', '和女友約會'];



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
                      <Text style={styles.text}>{group.name}</Text>
                  </ListItem>
              }>
              </List>
          );
        }
      //----------------------------------------------------

      return (
        <Container style={styles.drawer}>
          <TouchableOpacity   onPress={() => {this.handleOnClickCorgi()}}>
          <Image
              source={this.images[this.state.index]}
              style={styles.corgi}
            /></TouchableOpacity>
            <Content>
                <List>
                    {/* 代辦事項 */}
                    <ListItem itemDivider style={styles.itemheight}><Left><Text style={styles.text}>待辦事項</Text></Left><Body></Body><Right></Right></ListItem>
                    <ListItem button onPress={() => navigate('Today')}>
                        <Icon name='bomb' size={20}/>
                        <Text style={styles.text}>今天</Text>
                    </ListItem>
                    <ListItem  button onPress={() => navigate('Upcoming')}>
                        <Icon name='clock-alert' size={20}/>
                        <Text style={styles.text}>即將來臨</Text>
                    </ListItem>
                    <ListItem  button onPress={() => navigate('SomeDay')}>
                        <Icon name='timetable' size={20}/>
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
                    <ListItem itemDivider><Left><Text style={styles.text}>設定</Text></Left><Body></Body><Right></Right></ListItem>
                    <ListItem  button onPress={() => navigate('Setting')}>
                        <Icon name='settings-box' size={20}/>
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
        flex: 2,
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
        fontSize: (Platform.OS === 'ios') ? 10 : 12,
        fontWeight: 'bold',
        flex: 1,
        marginHorizontal: 12,

    },
    title:{
        backgroundColor: 'rgb(255, 219, 251)',
        fontSize: (Platform.OS === 'ios')? 10: 12
    },
    itemheight:{
      flex:1
    },
    corgi:{
      width:125,
      height:125,
      marginLeft:'auto',
      marginRight:'auto',
      opacity:0.5,
      borderWidth: 0.5,
      borderColor: 'black',
      borderRadius:90,
    },
    background:{
      resizeMode: 'cover',
      width:null,
      height:null,
      flex: 1
    }
};
export default connect((state, ownProps) => ({
    groupScreenName: state.group.groupScreenName,
    groupNameText: state.groupName.groupNameText,
    groups: state.group.groups,
    modalToggle: state.groupName.modalToggle,
    pictureNum: state.corgi.pictureNum
}))(DrawerSideBar);
