import React from 'react';
import {Container, Content, Form, Item, Label, Input, Header, Left, Right, Body, Button} from 'native-base';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class TypeEventScreen extends React.Component{
    constructor() {
        super();
    }

    render() {
        return (
            <Container>
                <Text>this</Text>

                <Header>
                    <Left>
                        <Button transparent >
                            <Icon name='undo' size={30}/>
                        </Button>
                    </Left>
                </Header>
                <Content>
                    <Form>
                        <Item fixedLabel>
                           <Label>Username</Label>

                       </Item>
                    </Form>
                </Content>
            </Container>
       )
   }
}
