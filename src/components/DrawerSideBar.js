import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image, Platform} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Container, Content, Thumbnail, Badge, Button, Text as NbText, List, ListItem, Separator, Left, Body, Right ,Segment} from 'native-base';
import appColors from '../styles/colors';
import {setGroupScreenName} from '../states/event-actions';
import {connect} from 'react-redux';

class DrawerSideBar extends React.Component {
    static propTypes = {
        navigate: PropTypes.func.isRequired,
        dispatch: PropTypes.func.isRequired
    };
    constructor(props){
        super(props);
        this.handleOnClick=this.handleOnClick.bind(this);
    }
    handleOnClick(item){
        console.log(this.props);
        this.props.dispatch(setGroupScreenName(item));
        console.log(setGroupScreenName);
        this.props.navigate('Group');
        // this.props.dispatch(setGroupScreenName(item));
    }

    render() {
      const {navigate, dispatch} = this.props;
      //-----------------Group List Setting-----------------------
        var items=['和學妹出去玩', '和妹妹野餐', '和女友約會'];
        let children=(
          <ListItem>
              <Icon name='tag-multiple' size={24}/>
              <Text style={styles.text}>新增群組</Text>
          </ListItem>
        );
        if(items.length){
          children=(
              <List dataArray={items}
              renderRow={(item) =>
                  <ListItem button onPress={() =>  {this.handleOnClick(item)}}>
                      <Icon name='tag-multiple' size={20}/>
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
                    <ListItem itemDivider><Left><Text style={styles.text}>待辦事項</Text></Left><Body></Body><Right></Right></ListItem>
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
                        <Left><Text style={styles.text}>群組</Text></Left>
                        <Body></Body>
                        <Right><Icon button name='tag-plus' size={20} onPress={() => navigate('CreateGroup')}/></Right>
                    </ListItem>
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
        marginHorizontal: 12
    },
    title:{
        backgroundColor: 'rgb(255, 219, 251)',
        fontSize: (Platform.OS === 'ios')? 10: 12
    },
    itemheight:{

      flex:1
    }
};
export default connect((state, ownProps) => ({
    groupScreenName: state.group.groupScreenName
}))(DrawerSideBar);
