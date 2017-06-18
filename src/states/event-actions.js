import {
    listPosts as listPostsFromApi,
    createPost as createPostFromApi,
    listGroup as listGroupFromApi,
    createGroup as createGroupFromApi
} from '../api/posts.js';

/*  Posts */

function startListEvents() {
    return {
        type: '@EVENT/START_LIST_EVENTS'
    };
}

function endListEvents(events) {
    return {
        type: '@EVENT/END_LIST_EVENTS',
        events
    };
}

function startCreateEvent() {
    return {
        type: '@EVENT/START_CREATE_EVENT'
    };
}

function endCreateEvent(event) {
    return {
        type: '@EVENT/END_CREATE_EVENT',
        event
    };
}


export function listEvents(searchText, group, startDate, endDate) {
    return (dispatch, getState) => {
        dispatch(startListEvents());
        return listPostsFromApi(searchText, '', group, startDate, endDate).then(events => {
            dispatch(endListEvents(events));
        }).catch(err => {
            dispatch(endListEvents());
            console.error('Error listing events', err);
        });
    };
};

//eventform input handling
export function inputStart(date) {
    return {
        type: '@EVENTFORM/STARTDATE',
        date
    };
}
export function inputEnd(date) {
    return {
        type: '@EVENTFORM/ENDDATE',
        date
    };
}
export function inputTitle(title) {
    return {
        type: '@EVENTFORM/TITLE',
        title
    };
}
export function inputGroup(group) {
    return {
        type: '@EVENTFORM/GROUP',
        group: group
    };
}

export function createEvent(StartDate, EndDate, Group = '', Title = '', Description = '') {
    console.log('redux received:',StartDate,EndDate,Group.Title,Description);
    console.log('group:',Group);
    console.log('title:',Title);
    console.log('Description:',Description);
    return (dispatch, getState) => {
        dispatch(startCreateEvent());

        return createPostFromApi(StartDate, EndDate, Group, Title, Description).then(event => {
            dispatch(endCreateEvent(event));
        }).catch(err => {
            dispatch(endCreateEvent())
            console.error('Error creating event', err);
        });
    };
};

//Side bar: group list
function startListGroup(){
    return {
        type: '@GROUP/START_LIST_GROUP'
    };
}
function endListGroup(groups){
    return {
        type: '@GROUP/END_LIST_GROUP',
        groups
    };
}
function startCreateGroup(){
    return {
        type: '@GROUP/START_CREAT_GROUP'
    };
}
function endCreateGroup(group){
    return{
        type: '@GROUP/END_CREATE_GROUP',
        group
    };
}
export function listGroups(){
    return (dispatch, getState) => {
        dispatch(startListEvents());
        return listGroupFromApi().then(groups => {
            dispatch(endListEvents(groups));
        }).catch(err => {
            dispatch(endListEvents());
            console.error('Error listing group', err);
        });
    };
}
export function createGroup(name=''){
    return (dispatch, getState) => {
        dispatch(startCreateGroup());

        return createGroupFromApi(name).then(group => {
            dispatch(endCreateGroup(group));
        }).catch(err => {
            dispatch(endCreateGroup())
            console.error('Error creating group', err);
        });
    };
}
export function setGroupScreenName(name){
    return{
        type: '@GROUP/SET_GROUP_SCREEN_NAME',
        name
    };
}
