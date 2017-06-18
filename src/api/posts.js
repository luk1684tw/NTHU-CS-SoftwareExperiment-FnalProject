// Develop server URL
// const postBaseUrl = 'http://localhost:3000/api';

// Staging server URL
// const postBaseUrl = 'http://weathermood-staging.us-west-2.elasticbeanstalk.com/api';

// Production server URL
const postBaseUrl = 'http://weathermood-production.us-west-2.elasticbeanstalk.com/api';
import {AsyncStorage} from 'react-native';
import FileSystem from 'react-native-filesystem';
const moment = require('moment');
const uuid = require('uuid/v4');


export function listPosts(searchText = '', start, group = '', startDate='', endDate='') {
    return new Promise((resolve,reject) => {
        AsyncStorage.getItem('user').then(events => {
            if (startDate) {
                events.filter((item) => {
                    return (moment(startDate,'YYYY-MM-DD HH:mm').unix() >= moment(item,'YYYY-MM-DD HH:mm').unix());
                });
            }
            if (endDate) {
                events.filter((item) => {
                    return (moment(endDate,'YYYY-MM-DD HH:mm').unix() <= moment(item,'YYYY-MM-DD HH:mm').unix());
                });
            }
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
            resolve(events);
        }).catch((err) => {
            console.log('read file failed');
            reject(err);
        });
    });
}

export async function createPost(StartDate, EndDate, Group, Title) {
    console.log('go in api');
    let value = await AsyncStorage.getItem('user');
    let NewEvent = {
        StartDate: StartDate,
        EndDate: EndDate,
        Group: Group,
        Title: Title
    };
    if (value == null) {
        AsyncStorage.setItem('user',JSON.stringify(NewEvent));
    } else {
        value = [
            ...value,
            NewEvent
        ];
        AsyncStorage.setItem('user',JSON.stringify(value));
    }

}

export function listGroup() {
    return new Promise((resolve,reject) => {
        AsyncStorage.getItem('group').then(groups => {
            resolve(groups);
        }).catch((err) => {
            console.log('load group names failed');
            reject(err);
        });
    });
}

export async function createGroup(name = '') {
    let value = await AsyncStorage.getItem('group');
    if (value == null) {
        AsyncStorage.setItem('group',JSON.stringify(' '));
    }
    value = [
        ...value,
        name
    ];
    AsyncStorage.setItem('group');
}
