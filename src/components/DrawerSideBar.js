import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image, Platform} from 'react-native'

import {Container, Content, Thumbnail, Icon, Badge, Button, Text as NbText, List, ListItem, Separator} from 'native-base';
import appColors from '../styles/colors';

export default class DrawerSideBar extends React.Component {
    static propTypes = {
        navigate: PropTypes.func.isRequired
    };

    render() {
      const {navigate} = this.props;
      return (
        <Container style={styles.drawer}>
            <Content>
                <List>
                    <Separator bordered>
                        <Text>待辦事項</Text>
                    </Separator>
                    <ListItem button onPress={() => navigate('Today')}>
                        <Text style={styles.text}>今天</Text>
                    </ListItem>
                    <ListItem button onPress={() => navigate('Upcoming')}>
                        <Text style={styles.text}>即將來臨</Text>
                    </ListItem>
                    <ListItem button onPress={() => navigate('SomeDay')}>
                        <Text style={styles.text}>選擇一天</Text>
                    </ListItem>
                    <Separator bordered>
                        <Text>群組</Text>
                    </Separator>
                    <ListItem button onPress={() => navigate('Group')}>
                        <Text style={styles.text}>群組1</Text>
                    </ListItem>
                    <ListItem button onPress={() => navigate('Group')}>
                        <Text style={styles.text}>群組2</Text>
                    </ListItem>
                    <ListItem button onPress={() => navigate('Group')}>
                        <Text style={styles.text}>群組3</Text>
                    </ListItem>
                    <Separator bordered>
                        <Text>設定</Text>
                    </Separator>
                    <ListItem button onPress={() => navigate('Setting')}>
                        <Text style={styles.text}>個人設定</Text>
                    </ListItem>
                </List>
            </Content>
        </Container>
    );
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
    }
};
