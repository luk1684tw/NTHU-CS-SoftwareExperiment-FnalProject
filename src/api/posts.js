// Develop server URL
// const postBaseUrl = 'http://localhost:3000/api';

// Staging server URL
// const postBaseUrl = 'http://weathermood-staging.us-west-2.elasticbeanstalk.com/api';

// Production server URL
const postBaseUrl = 'http://weathermood-production.us-west-2.elasticbeanstalk.com/api';
import {AsyncStorage} from 'react-native';
const uuid = require('uuid/v4');

export function listEvents(searchText = '', start, group = '') {
    let events = await AsyncStorage.getItem('user');
    if (searchText) {
        events.filter((e) => {
            return ((e.Description.toLowerCase().indexOf(searchText.toLowerCase()) !== -1)
            || (e.Title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1));
        });
    }
    if (group) {
        events.filter((e) => {
            return (e.Group.toLowerCase().indexOf(group.toLowerCase()) !== -1);
        });
    }
}

export function createEvent(StartDate, EndDate, Group, Title, Description) {
    AsyncStorage.getItem('user',(err,result) => {
        let Newevent = {
            Id: uuid();
            StartDate: StartDate,
            EndDate: EndDate,
            Group: Group,
            Title: Title,
            Description: Description
        };
        result = [
            ...result,
            Newevent
        ];
        AsyncStorage.setItem('user',JSON.stringify(result));
    });
}

export function listGroup() {
    let group = await AsyncStorage.getItem('group');
    if (group != null) {
        return group;
    } else {
        console.log('no group exist!');
    };
}

export function createGroup(name = '') {
    AsyncStorage.getItem('group',(err,result) => {
        result = [
            ...result,
            name
        ];
        AsyncStorage.setItem('group',JSON.stringify(result));
    });
}
