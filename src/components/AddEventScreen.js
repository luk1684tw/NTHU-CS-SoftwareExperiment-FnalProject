import React from 'react';
import PropTypes from 'prop-types';
import {Text,StyleSheet,ScrollView,View,TouchableOpacity,Image} from 'react-native';
import {Container, Content, Button, Header, Left, Right, Body, Title, Form, Item, Label, Input} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {connect} from 'react-redux';
import {Calendar,CalendarList} from 'react-native-calendars';
import DatePicker from 'react-native-datepicker';
import {inputEventTitle, inputDanger, selectStartDate, selectGroup, selectEndDate} from '../states/event-actions';

class AddEventScreen extends React.Component{
    static propTypes={
        navigation: PropTypes.object,
        groupScreenName: PropTypes.string,
        eventTitle: PropTypes.string,
        eventGroup: PropTypes.string,
        eventStartDate: PropTypes.string,
        eventEndDate: PropTypes.string,
        inputDanger: PropTypes.bool
    }
    constructor(props) {
        super(props);
          this.state = {
            start: '',
            end: '',
            time:"12:50"
          };
          this.onDayPress = this.onDayPress.bind(this);
          this.handleGoBack = this.handleGoBack.bind(this);
          this.handleTitleChange = this.handleTitleChange.bind(this);
          this.handleCreateEvent = this.handleCreateEvent.bind(this);
      }
     handleTitleChange(){
         const {inputDanger: danger, dispatch} = this.props;
         const title = e.nativeEvent.text;
         if (danger)
             dispatch(inputDanger(false));
         dispatch(inputEventTitle(title));
     }
     handleCreateEvent(){

     }
    render () {
        return (

          <Image source={require('../images/spring.png')} style = {styles.background}>
              <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={this.handleGoBack}>
                            <Icon name='chevron-left' size={30} style = {{color: 'white'}}/>
                        </Button>
                    </Left>
                    <Body>
                        <Text style={{marginLeft: 59, fontSize: 15, color:'white'}}>Choose a Day!</Text>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => {}}>
                            <Icon name='chevron-right' size={30} style = {{color: 'white'}}/>
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
                            <Label style={{color:'white'}}>想要提醒甚麼</Label>
                            <Input  onChangeText={(text) => {console.log(text);}}/>
                        </Item>
                    </Form>

                </Content>
              </Container>
            </Image>

        );
    };

    onDayPress(day) {
        const {eventStartDate, eventEndDate, dispatch} = this.props;
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
        if(eventStartDate==='' && eventEndDate===''){
            dispatch(selectStartDate(day.dateString));
        }else if(eventStartDate){
            if(day.string<eventStartDate){
                var temp=eventStartDate;
                dispatch(selectStartDate(day.dateString));
                dispatch(selectEndDate(temp));
            }else{
                dispatch(selectEndDate(day.dateString));
            }
        }else if(this.props.eventEndDate){
            if(day.string>eventEndDate){
                var temp=eventEndDate;
                dispatch(selectEndDate(day.dateString));
                dispatch(selectStartDate(temp));
            }else{
                dispatch(selectStartDate(day.dateString));
            }
        }else{

        }
        console.log(this.state);
    }

    handleGoBack() {
        this.props.navigation.goBack();
    }


}

export default connect((state) => ({
    eventTitle: state.eventForm.eventTitle,
    eventGroup: state.eventForm.eventGroup,
    eventStartDate: state.eventForm.eventStartDate,
    eventEndDate: state.eventForm.eventEndDate,
    groupScreenName: state.group.groupScreenName,
    inputDanger: state.eventForm.inputDanger
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },

});
