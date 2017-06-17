// Develop server URL
// const postBaseUrl = 'http://localhost:3000/api';

// Staging server URL
// const postBaseUrl = 'http://weathermood-staging.us-west-2.elasticbeanstalk.com/api';

// Production server URL
const postBaseUrl = 'http://weathermood-production.us-west-2.elasticbeanstalk.com/api';
import {AsyncStorage} from 'react-native';
const moment = require('moment');
const uuid = require('uuid/v4');


export function listPosts(searchText = '', start, group = '', date) {
    return new Promise((resolve,reject) => {
        AsyncStorage.getItem('user').then(events => {
            if (date) {
                events.filter((item) => {
                    return (moment(date,'YYYY-MM-DD HH:mm').unix() >= moment(item,'YYYY-MM-DD HH:mm').unix());
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

export function createPost(StartDate, EndDate, Group, Title, Description) {
    AsyncStorage.getItem('user').then(result => {
        let Newevent = {
            Id: uuid(),
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
        return Newevent;
    }).catch(error => {
        console.log(eror);
    });

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

export function createGroup(name = '') {
    AsyncStorage.getItem('group',(err,result) => {
        result = [
            ...result,
            name
        ];
        AsyncStorage.setItem('group',JSON.stringify(result));
    });
}
