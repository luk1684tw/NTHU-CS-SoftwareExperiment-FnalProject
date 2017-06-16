import React from 'react';
import {Text} from 'react-native';

import {Content, Container, Header, Left, Right, Body, Button} from 'native-base';
import Icon from 'react-native-vector-icons/'


export default class AddEventScreen extends React.Component{
    render () {
        return (

            <Container>
                <Content>
                    <Header>
                        <Left>
                            <Button transparent>
                                <Icon/>
                            </Button>
                        </Left>
                    </Header>
                </Content>
            </Container>

        );
    };
}
const styles = {
    fontSize: 50,
    alignItems: 'center'
};
