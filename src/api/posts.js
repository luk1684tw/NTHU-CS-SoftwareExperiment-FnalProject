// Develop server URL
// const postBaseUrl = 'http://localhost:3000/api';

// Staging server URL
// const postBaseUrl = 'http://weathermood-staging.us-west-2.elasticbeanstalk.com/api';

// Production server URL

//to be finished : add a accomplished event list & store redux state to AsyncStorage

import {AsyncStorage} from 'react-native';
const moment = require('moment');
const uuid = require('uuid/v4');


export function listPosts(group = '', startDate = -1, endDate = -1) {
    console.log('listPosts get',group,startDate,endDate);
    return new Promise((resolve,reject) => {
        AsyncStorage.getItem('user').then(events => {
            var Events=[];
            if(events){
                Events = JSON.parse(events);
            }
            if (Events.length>0 && group) {
                console.log('before group filter',group,Events);
                Events=Events.filter((e) => {
                    return (e.Group.toLowerCase().indexOf(group.toLowerCase()) !== -1);
                });
                console.log('In listEvents API, group filter', group, Events);
            }
            else if (startDate >= 0) {
                console.log('In here API');
                Events=Events.filter((item) => {
                    const up = moment().unix() + endDate*86400;
                    const down = moment().unix() + (startDate-1)*86400;
                    const event = moment(item.StartDate,'YYYY-MM-DD').unix();
                    console.log('from', item.StartDate, ' to ',item.EndDate);
                    console.log(down, ' < ', event , ' < ', up);
                    return ((down <= event) && (up >= event))
                });
            }
            resolve(Events);
        }).catch((err) => {
            console.log('read file failed');
            reject(err);
        });
    });
}

export function doneEvent(id='' ,startDate ,endDate , group){
    return new Promise ((resolve,reject) => {
        AsyncStorage.getItem('user').then((events) => {
            var Events = JSON.parse(events);
            var finished = [];

            Events.map((item) => {
                if (item.Id == id) {
                    item.isDone = true;
                }
                if (item.isDone) {
                    finished = [
                        ...finished,
                        item
                    ];
                }
            })
            AsyncStorage.setItem('user',JSON.stringify(Events));
            AsyncStorage.setItem('finish',JSON.stringify(finished));

            if (startDate >= 0) {
                console.log('In here API');
                Events=Events.filter((item) => {
                    const up = moment().unix() + endDate*86400;
                    const down = moment().unix() + (startDate-1)*86400;
                    const event = moment(item.StartDate,'YYYY-MM-DD').unix();
                    console.log('from', item.StartDate, ' to ',item.EndDate);
                    console.log(down, ' < ', event , ' < ', up);
                    return ((down <= event) && (up >= event))
                });
            }

            if (Events.length>0 && group) {
                Events=Events.filter((e) => {
                    return (e.Group.toLowerCase().indexOf(group.toLowerCase()) !== -1);
                });
                console.log('In listEvents API, group filter', group, Events);
            }
            resolve(Events);
        }).catch((err) => {
            console.log(err);
        })
    })
}

export function createPost(StartDate, EndDate, Group, Title) {
    return new Promise((resolve,reject) => {
        // AsyncStorage.removeItem('user');
        console.log('creatrPOst get', Group,StartDate, EndDate,Title);
        AsyncStorage.getItem('user').then(result => {
            if (moment(StartDate,'YYYY-MM-DD').unix() > moment(EndDate,'YYYY-MM-DD').unix()){
                var startdate = EndDate;
                var enddate = StartDate;
            } else {
                var startdate = StartDate;
                var enddate = EndDate;
            }
            console.log('result=',result);
            var start = moment(startdate,'YYYY-MM-DD').format('MM-DD');
            var end = moment(enddate,'YYYY-MM-DD').format('MM-DD');
            var time = start + ' to ' + end;
            console.log('time:' ,time);
            let Newevent = {
                Id: uuid(),
                StartDate: startdate,
                EndDate: enddate,
                Group: Group,
                title: Title,
                time: time,
                isDone: false
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
            var Groups = JSON.parse(groups);
            console.log('In listGroupFromApi', Groups);
            resolve(Groups);
        }).catch((err) => {
            console.log('load group names failed');
            reject(err);
        });
    });
}

export function createGroup(name = '') {
    return new Promise((resolve, reject)=>{
        AsyncStorage.getItem('group').then((result)=>{
                if(result == null){
                    var Result=[name];
                    AsyncStorage.setItem('group',JSON.stringify(Result));
                }else{
                    var Result = JSON.parse(result);
                    Result=[
                        ...Result,
                        name
                    ]
                    AsyncStorage.setItem('group',JSON.stringify(Result));
                }
                console.log('In api createGroup', Result);
                resolve(Result);
            }
        ).catch(
            (err)=>{
                console.log('Create group error');
                reject(err);
            }
        );
    });
}
