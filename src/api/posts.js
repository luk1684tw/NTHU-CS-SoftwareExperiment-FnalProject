// Develop server URL
// const postBaseUrl = 'http://localhost:3000/api';

// Staging server URL
// const postBaseUrl = 'http://weathermood-staging.us-west-2.elasticbeanstalk.com/api';

// Production server URL
const postBaseUrl = 'http://weathermood-production.us-west-2.elasticbeanstalk.com/api';
import {AsyncStorage} from 'react-native';
const moment = require('moment');
const uuid = require('uuid/v4');


export function listPosts(group = '', startDate='', endDate='') {
    return new Promise((resolve,reject) => {
        AsyncStorage.getItem('user').then(events => {
            var Events=JSON.parse(events);
            if (startDate) {
                Events.filter((item) => {
                    return (moment(startDate,'YYYY-MM-DD HH:mm').unix() >= moment(item,'YYYY-MM-DD HH:mm').unix());
                });
            }
            if (endDate) {
                Events.filter((item) => {
                    return (moment(endDate,'YYYY-MM-DD HH:mm').unix() <= moment(item,'YYYY-MM-DD HH:mm').unix());
                });
            }
            if (group) {
                Events.filter((e) => {
                    return (e.Group.toLowerCase().indexOf(group.toLowerCase()) !== -1);
                });
            }
            resolve(Events);
        }).catch((err) => {
            console.log('read file failed');
            reject(err);
        });
    });
}

export function createPost(StartDate, EndDate, Group, Title) {
    return new Promise((resolve,reject) => {
        //  AsyncStorage.removeItem('user');
        AsyncStorage.getItem('user').then(result => {
            if (moment(StartDate,'YYYY-MM-DD').unix() > moment(EndDate,'YYYY-MM-DD').unix()){
                var startdate = EndDate;
                var enddate = StartDate;
            } else {
                var startdate = StartDate;
                var enddate = EndDate;
            }
            console.log('result=',result);
            var time = startdate+'-'+enddate;
            let Newevent = {
                Id: uuid(),
                StartDate: startdate,
                EndDate: enddate,
                Group: Group,
                title: Title,
                time: time
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
                var Result = JSON.parse(result);
                Result = [
                    ...Result,
                    Newevent
                ];
                console.log('Result:',Result);
                AsyncStorage.setItem('user',JSON.stringify(Result));
                console.log('write data to async success');
                resolve(Result);
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
