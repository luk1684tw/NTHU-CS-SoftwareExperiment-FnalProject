import React from 'react';

import {Text,StyleSheet,ScrollView,View,TouchableOpacity,Image} from 'react-native';
import {Container, Content, Button, Header, Left, Right, Body, Title, Form, Item, Label, Input} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {connect} from 'react-redux';
import {Calendar,CalendarList} from 'react-native-calendars';
import DatePicker from 'react-native-datepicker';


class AddEventScreen extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            start: '',
            end: '',
            time:"12:50"
        };
        this.onDayPress = this.onDayPress.bind(this);
        this.handleGoBack = this.handleGoBack.bind(this);
        this.handleCreateEvent = this.handleCreateEvent.bind(this);

        console.log('props:',this.props);
      }

    render () {
        return (

          <Image source={require('../images/spring.png')} style = {styles.background}>
              <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={this.handleGoBack}>
                            <Icon name='chevron-left' size={30}/>
                        </Button>
                    </Left>
                    <Body>
                        <Text style={{marginLeft: 59, fontSize: 15}}>Choose a Day!</Text>
                    </Body>
                    <Right>

                      {/*<DatePicker
                          date={this.state.time}
                          mode="time"
                          format="HH:mm"
                          minuteInterval={10}
                          iconSource={require('../images/clock.png')}
                          customStyles={{
                            dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 110
                          },
                          dateInput: {
                            marginLeft: 300
                          }
                        }}
                          onDateChange={(time) => {this.setState({time: time});}}
                        />*/}
                        <Button transparent onPress={() => {}}>
                            <Icon name='chevron-right' size={30}/>
                        </Button>
                    </Right>

                </Header>
                <Content>

                    <ScrollView>
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

                    {/*(this.state.start!=='')?
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>From:{this.state.start}</Text>
                        : <Text/>*/}
                    {/*(this.state.end!=='')?
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>To:{this.state.start}</Text>
                        : <Text/>*/}
                    <Form>
                        <Item floatingLabel>
                            <Label>輸入提醒名稱</Label>
                            <Input onChangeText={(text) => {console.log(text);}}/>
                        </Item>
                    </Form>

                </Content>
              </Container>
            </Image>

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

    handleCreateEvent() {
        
    }

}

export default connect((state) => ({
}))(AddEventScreen);

const styles = StyleSheet.create({
  background:{
    resizeMode: 'cover',
    width:null,
    height:null,
    flex: 1,
    opacity:0.9
  },
  calendar: {
    borderTopWidth: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: '#eee',
    height: 320
  },
  text: {
    textAlign: 'center',
    borderColor: '#bbb',
    padding: 10,
    backgroundColor: '#eee'
  },
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
 overlap:{
   position: 'absolute'
 },


});
