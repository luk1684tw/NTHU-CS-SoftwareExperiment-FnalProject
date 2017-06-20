import React from 'react';
import PropTypes from 'prop-types';
import {TimePickerAndroid,Text,StyleSheet,ScrollView,View,TouchableOpacity,Image} from 'react-native';
import {Container, Content, Button, Header, Left, Right, Body, ListItem, Title, Form, Item, Label, Input,Toast} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {connect} from 'react-redux';
import {Calendar,CalendarList} from 'react-native-calendars';
//import DatePicker from 'react-native-datepicker';
import {listEvents} from '../states/event-actions';
import {selectStartTime, selectEndTime,resetForm, createEvent, inputEventTitle, inputDanger, selectStartDate, selectGroup, selectEndDate, changeFirstDate, changeSecondDate} from '../states/event-actions';
class AddEventScreen extends React.Component{
    static propTypes={
        navigation: PropTypes.object,
        groupScreenName: PropTypes.string,
        eventTitle: PropTypes.string,
        eventGroup: PropTypes.string,
        eventStartDate: PropTypes.string,
        eventEndDate: PropTypes.string,
        eventStartTime: PropTypes.string,
        eventEndTime: PropTypes.string,
        inputDanger: PropTypes.bool,
        firstClickDate: PropTypes.string,
        secondClickDate: PropTypes.string,
        dispatch: PropTypes.func
    }
    constructor(props) {
        super(props);
          this.state = {
            start: '',
            end: '',
            time:"12:50",
          };
          this.onDayPress = this.onDayPress.bind(this);
          this.handleGoBack = this.handleGoBack.bind(this);
          this.handleTitleChange = this.handleTitleChange.bind(this);
          this.handleCreateEvent = this.handleCreateEvent.bind(this);
    }
     handleTitleChange(e){
         const {inputDanger: danger, eventTitle, dispatch} = this.props;
         dispatch(inputEventTitle(e.nativeEvent.text));

     }
     handleCreateEvent(){
         const{eventTitle, eventStartDate, groupScreenName, eventEndDate, firstClickDate, secondClickDate, dispatch}=this.props;
         const {goBack, navigate} = this.props.navigation;
         if(eventTitle && (eventStartDate||eventEndDate)&&(firstClickDate || secondClickDate)){
             dispatch(createEvent(eventStartDate, eventEndDate, groupScreenName, eventTitle));
             dispatch(resetForm());
             //dispatch(listEvents());
             if(groupScreenName)
                navigate('Group');
             else
                navigate('Today');
         }else if(!(eventStartDate&&eventEndDate&&firstClickDate && secondClickDate)){
           Toast.show({
             supportedOrientations: ['portrait','landscape'],
             text: 'choose Start and End day',
             position: 'bottom',
             duration: 2600
         });
       }else{
          Toast.show({
            supportedOrientations: ['portrait','landscape'],
            text: 'add Text above ',
            position: 'bottom',
            duration: 2600
       })
      }
    }
    render () {
      if(this.props.mode===0){
          var url= require('../images/bg/season1.png');
      }
      else if(this.props.mode===1){
          var url=require('../images/bg/plant1.png');
      }
      else if(this.props.mode===2){
          var url=require('../images/bg/bird1.png');
      }
      else if(this.props.mode===3){
          var url=require('../images/bg/pet1.png');
      }

        return (

          <Image source={url} style = {styles.background}>
              <Container>
                <Header style={styles.header}>
                    <Left>
                        <Button transparent onPress={this.handleGoBack}>
                            <Icon name='chevron-left' size={30} style = {{color: 'white'}}/>
                        </Button>
                    </Left>

                    {/*<Body>
                        <Text style={{marginLeft :75, fontSize: 20, color:'white'}}>新增提醒事項</Text>
                    </Body>*/}

                    {/*<Right>
                        <Button transparent onPress={this.handleCreateEvent}>
                            <Icon name='chevron-right' size={30} style = {{color: 'white'}}/>
                        </Button>
                    </Right>*/}

                </Header>
                <Content>
                    <ScrollView>
                        <Calendar
                            onDayPress={(day)=> this.onDayPress(day)}
                            style={styles.calendar}
                            markedDates={
                            {
                                [this.props.firstClickDate]: [{startingDay: true},{color:'green'},{marked:true}],
                                [this.props.secondClickDate]: [{endingDay: true},{color:'green'},{marked:true},{textColor: 'green'}]
                            }}
                            format='MM-DD'
                        />

                    </ScrollView>
                    <Form>
                        <Item floatingLabel>
                            <Label style={{color:'white'}}>想要提醒甚麼</Label>
                            <Input  onChange={this.handleTitleChange}/>
                        </Item>

                        <View style={{flex:1, margin:20}}>
                            <Right><Button info rounded onPress={this.handleCreateEvent}><Text style={{color:'white'}}>新增</Text></Button></Right>
                        </View>
                    </Form>
                </Content>
              </Container>
            </Image>

        );
    };

    onDayPress(day) {
        
        const {eventStartDate, eventEndDate, firstClickDate, secondClickDate, dispatch} = this.props;
        if(firstClickDate==='' && secondClickDate===''){
            dispatch(changeFirstDate(day.dateString));
            dispatch(selectStartDate(day.dateString));
        }else if(firstClickDate!=='' && secondClickDate===''){
            if(day.dateString<eventStartDate){
                var temp=eventStartDate;
                console.log('In this ass hole');
                dispatch(selectStartDate(day.dateString));
                dispatch(selectEndDate(temp));
                dispatch(changeSecondDate(day.dateString));
            }else if(day.dateString>eventStartDate){
                console.log('In here fuck you');
                dispatch(selectEndDate(day.dateString));
                dispatch(changeSecondDate(day.dateString));
            }
        }else if(firstClickDate && secondClickDate){
            dispatch(changeFirstDate(''));
            dispatch(changeSecondDate(''));
            dispatch(selectStartDate(day.dateString));
        }
        // console.log('eventStartDate', eventStartDate);
        // console.log('eventEndDate', eventEndDate);
        // console.log('firstClickDate', firstClickDate);
        // console.log('secondClickDate', secondClickDate);
    }

    handleGoBack() {
        this.props.navigation.goBack();
    }
}

export default connect((state, ownProps) => ({
    eventTitle: state.eventForm.eventTitle,
    eventGroup: state.eventForm.eventGroup,
    eventStartDate: state.eventForm.eventStartDate,
    eventEndDate: state.eventForm.eventEndDate,
    eventStartTime:state.eventForm.eventStartTime,
    eventEndTime:state.eventForm.eventEndTime,
    groupScreenName: state.group.groupScreenName,
    inputDanger: state.eventForm.inputDanger,
    firstClickDate: state.eventForm.firstClickDate,
    secondClickDate: state.eventForm.secondClickDate,
    mode:state.theme.mode,
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
  }

});
