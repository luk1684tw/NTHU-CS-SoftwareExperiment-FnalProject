import React from 'react';
import {Text,StyleSheet,ScrollView,View} from 'react-native';
import {Container, Content, Button, Header, Left, Right, Body, Title} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {connect} from 'react-redux';
import {Calendar,CalendarList} from 'react-native-calendars';



class AddEventScreen extends React.Component{
    constructor(props) {
        super(props);
          this.state = {
            items:{},
          };
          this.onDayPress = this.onDayPress.bind(this);
          this.handleGoBack = this.handleGoBack.bind(this);
          console.log('props:',this.props);
        }

    render () {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={this.handleGoBack}>
                            <Icon name='keyboard-return' size={30 }/>
                        </Button>
                    </Left>
                    <Body>
                        <Title>Choose A Day!</Title>
                    </Body>

                </Header>
                <Content>
                    <ScrollView style={styles.container}>
                        <Calendar
                          onDayPress={(day)=> this.onDayPress(day)}
                          style={styles.calendar}
                          hideExtraDays
                          markedDates={{[this.state.selected]: {selected: true}}}
                        />
                    </ScrollView>
                </Content>
            </Container>
        );
    };

    onDayPress(day) {
        console.log('day pressed:',day);
        this.setState({
          selected: day.dateString
        });
        console.log(this.state.selected);
    }

    handleGoBack() {
        this.props.navigation.goBack();
    }
}

export default connect((state) => ({
}))(AddEventScreen);

const styles = StyleSheet.create({
  calendar: {
    borderTopWidth: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: '#eee',
    height: 350
  },
  text: {
    textAlign: 'center',
    borderColor: '#bbb',
    padding: 10,
    backgroundColor: '#eee'
  },
  container: {
    flex: 1,
    backgroundColor: 'gray'
  },
});
