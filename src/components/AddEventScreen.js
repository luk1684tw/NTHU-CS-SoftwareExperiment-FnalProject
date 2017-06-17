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
            start: '',
            end: '',
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
                            <Icon name='chevron-left' size={30}/>
                        </Button>
                    </Left>
                    <Right>
                        <Button transparent>
                            <Icon name='chevron-right' size={30}/>
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <ScrollView style={styles.container}>
                        <Calendar
                            onDayPress={(day)=> this.onDayPress(day)}
                            style={styles.calendar}
                            markedDates={
                            {
                                [this.state.start]: [{startingDay: true},{color:'green'},{marked:true}],
                                [this.state.end]: [{endingDay: true},{color:'green'},{marked:true},{textColor: 'green'}]
                            }}
                            
                        />
                    </ScrollView>
                </Content>
            </Container>
        );
    };

    onDayPress(day) {
        console.log('day pressed:',day);
        if (this.state.start == this.state.end) {
            this.setState({
                end: day.dateString
            })
        } else {
            this.setState({
              start: day.dateString,
              end: day.dateString
            });
        }
        console.log(this.state);
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
    height: 365
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
