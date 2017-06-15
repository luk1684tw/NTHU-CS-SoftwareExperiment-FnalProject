import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image, Platform} from 'react-native'

import {Container, Content, Thumbnail, Icon, Badge, Button, Text as NbText, List, ListItem} from 'native-base';
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
                    <ListItem button onPress={() => navigate('Today')}>
                        <Text style={styles.text}>Today</Text>
                    </ListItem>
                    <ListItem button onPress={() => navigate('Upcoming')}>
                        <Text style={styles.text}>Upcoming</Text>
                    </ListItem>
                    <ListItem button onPress={() => navigate('SomeDay')}>
                        <Text style={styles.text}>SomeDay</Text>
                    </ListItem>
                    <ListItem button onPress={() => navigate('Group')}>
                        <Text style={styles.text}>Group</Text>
                    </ListItem>
                    <ListItem button onPress={() => navigate('Setting')}>
                        <Text style={styles.text}>Settings</Text>
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
        backgroundColor: appColors.primaryLight
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
