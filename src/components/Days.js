import React from 'react';
import {Text,StyleSheet,ScrollView,Viewsssss} from 'react-native';
import {Calendar,CalendarList,Agenda} from 'react-native-calendars';
import NavigationContainer from './NavigationContainer';


export default class SomeDayScreen extends React.Component{

    constructor(props) {
        super(props);
          this.state = {
            items:{},
          };
          this.onDayPress = this.onDayPress.bind(this);

        }

    render () {
        const {navigate} = this.props.navigation;
        return (
        <NavigationContainer navigate={navigate} title='Calendar'>

        <ScrollView style={styles.container}>

        <Calendar
          onDayPress={this.onDayPress}
          style={styles.calendar}
          hideExtraDays
          markedDates={{[this.state.selected]: {selected: true}}}
        />

        </ScrollView>

        </NavigationContainer>

    );
  };

  onDayPress(day) {
    this.setState({
      selected: day.dateString
    });
  }
}


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
