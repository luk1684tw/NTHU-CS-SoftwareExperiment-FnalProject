// Develop server URL
// const postBaseUrl = 'http://localhost:3000/api';

// Staging server URL
// const postBaseUrl = 'http://weathermood-staging.us-west-2.elasticbeanstalk.com/api';

// Production server URL
const postBaseUrl = 'http://weathermood-production.us-west-2.elasticbeanstalk.com/api';
import {AsyncStorage} from 'react-native';
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

export function createPost(StartDate, EndDate, Group, Title) {
    return new Promise((resolve,reject) => {
        // AsyncStorage.removeItem('user');
        AsyncStorage.getItem('user').then(result => {
            if (moment(StartDate,'YYYY-MM-DD').unix() > moment(EndDate,'YYYY-MM-DD').unix()){
                var startdate = EndDate;
                var enddate = StartDate;
            } else {
                var startdate = StartDate;
                var enddate = EndDate;
            }
            console.log('result=',result);
            let Newevent = {
                Id: uuid(),
                StartDate: startdate,
                EndDate: enddate,
                Group: Group,
                Title: Title,
            };

            console.log('api create',Newevent);
            if (result == null) {
                console.log('in result = null');
                result = [
                    Newevent
                ];
                AsyncStorage.setItem('user',JSON.stringify(result));
                resolve(result);
            } else {
                console.log('in result != null');
                result = [
                    ...result,
                    Newevent
                ];
                AsyncStorage.setItem('user',JSON.stringify(result));
                resolve(result);
            }
        }).catch(error => {
            reject(error);
            console.log('write event to AsyncStorage failed');
        });
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
    return new Promise((resolve))
    AsyncStorage.getItem('group',(err,result) => {
        result = [
            ...result,
            name
        ];
        AsyncStorage.setItem('group',JSON.stringify(result));
    });
}
