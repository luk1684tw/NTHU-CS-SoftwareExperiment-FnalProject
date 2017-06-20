import {
    listPosts as listPostsFromApi,
    createPost as createPostFromApi,
    listGroup as listGroupFromApi,
    createGroup as createGroupFromApi,
    doneEvent as doneEventFromApi
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

export function doneEvent(id=''){
    console.log('redux receive id: ',id);
    return (dispatch, getState)=>{
        dispatch(startListEvents());
        return doneEventFromApi(id).then(
            events=>{
                dispatch(endListEvents(events));
            }
        ).catch(
            err=>{
                dispatch(endListEvents());
                console.error('Error finish event', err);
            }
        );
    }
}
export function listEvents(group, startDate, endDate) {
    return (dispatch, getState) => {
        dispatch(startListEvents());
        return listPostsFromApi(group, startDate, endDate).then(events => {
            dispatch(endListEvents(events));
        }).catch(err => {
            dispatch(endListEvents());
            console.error('Error listing events', err);
        });
    };
};


export function createEvent(StartDate, EndDate, Group, Title) {
    return (dispatch, getState) => {
        dispatch(startCreateEvent());

        return createPostFromApi(StartDate, EndDate, Group, Title).then(event => {
            console.log('event get from api', event);
            dispatch(endCreateEvent(event));
            dispatch(listEvents());
        }).catch(err => {
            dispatch(endCreateEvent());
            console.error('Error creating event', err);
        });
    };
    // var newEvent={
    //     id: '666666666',
    //     StartDate: StartDate,
    //     EndDate: EndDate,
    //     Group: Group,
    //     Title: Title
    // };
    // return{
    //     type: '@EVENT/UPDATE_EVENT',
    //     event: newEvent
    // }
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
        dispatch(startListGroup());
        return listGroupFromApi().then(groups => {
            dispatch(endListGroup(groups));
        }).catch(err => {
            dispatch(endListGroup());
            console.error('Error listing group', err);
        });
    };
}
function updateGroup(groupName){
    return{
        type: '@GROUP/UPDATE_GROUP',
        groupName
    }
}
export function createGroup(groupName=''){
    return (dispatch, getState) => {
        dispatch(startCreateGroup());

        return createGroupFromApi(groupName).then(group => {
            console.log('In create Group', group);
            dispatch(endCreateGroup(group));
            dispatch(listGroups());
        }).catch(err => {
            dispatch(endCreateGroup())
            console.error('Error creating group', err);
        });
    };
    // return{
    //     type: '@GROUP/UPDATE_GROUP',
    //     groupName
    // }
    //dispatch(updateGroup(name));
}
export function setGroupScreenName(group){
    var name=group.name
    return{
        type: '@GROUP/SET_GROUP_SCREEN_NAME',
        name
    };
}

export function inputEventTitle(eventTitle){
    return{
        type:'@EVENT_FORM/INPUT_EVENT_TITLE',
        eventTitle
    }
}
export function inputDanger(danger){
    return{
        type:'@EVENT_FORM/INPUT_DANGER',
        danger
    }
}
export function selectStartDate(eventStartDate){
    return{
        type:'@EVENT_FORM/SELECT_START_DATE',
        eventStartDate
    }
}
export function selectEndDate(eventEndDate){
    return{
        type:'@EVENT_FORM/SELECT_END_DATE',
        eventEndDate
    }
}
export function selectGroup(eventGroup){
    return{
        type:'@EVENT_FORM/SELECT_GROUP',
        eventGroup
    }
}
export function changeFirstDate(firstClickDate){
    return{
        type:'@EVENT_FORM/CHANGE_FIRST_DATE',
        firstClickDate
    }
}
export function changeSecondDate(secondClickDate){
    return{
        type:'@EVENT_FORM/CHANGE_SECOND_DATE',
        secondClickDate
    }
}
export function selectStartTime(eventStartTime){
    return{
        type:'@EVENT_FORM/SELECT_START_TIME',
        eventStartTime
    }
}
export function selectEndTime(eventEndTime){
    return{
        type:'@EVENT_FORM/SELECT_END_TIME',
        eventEndTime
    }
}
export function resetForm(){
    return{
        type:'@EVENT_FORM/RESET_FORM'
    }
}
export function Animated(pictureNum) {
    return {
        type: '@PICTURE/Animated',
        pictureNum
    };
}
