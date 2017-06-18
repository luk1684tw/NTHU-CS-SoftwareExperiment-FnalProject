const initEventState = {
    listingEvents: false,
    events: [{id: '94879487',StartDate: '2017/6/16', EndDate: '2017/6/16', Group: '測試用', Title:'和女朋友吃飯', Description:'好吃'}, {id: '94539453',StartDate: '2017/6/17', EndDate: '2017/6/18', Group: '測試用', Title:'和老婆約會', Description:'和老婆約會'}],
    creatingEvent: false,
};
export function event(state = initEventState, action) {
    switch (action.type) {
        case '@EVENT/START_LIST_EVENTS':
            return {
                ...state,
                listingEvents: true,
            };
        case '@EVENT/END_LIST_EVENTS':
            if (!action.events)
                return {
                    ...state,
                    listingEvents: false
                };
            return {
                ...state,
                listingEvents: false,
                events: action.events,
            };
        case '@EVENT/START_CREATE_EVENT':
            return {
                ...state,
                creatingEvent: true
            };
        case '@EVENT/END_CREATE_EVENT':
            if (!action.event)
                return {
                    ...state,
                    creatingEvent: false
                };
            var newEvents = state.events.slice();
            newEvents.unshift(action.event);
            return {
                ...state,
                creatingEvent: false,
                evnets: newEvents
            };
        default:
            return state;
    }
}
//SideBar Group List
const initGroupState = {
    listingGroups: false,
    groups: [{name: '暑期計畫'}, {name: '女友度假'}],
    groupScreenName: '',
    creatingGroup: false
};
export function group(state = initGroupState, action) {
    switch (action.type) {
        case '@GROUP/START_LIST_GROUP':
            return {
                ...state,
                listingGroups: true
            };
        case '@GROUP/END_LIST_GROUP':
            if (!action.groups)
                return {
                    ...state,
                    listingGroups: false
                };
            return {
                ...state,
                listingGroups: false,
                groups: action.groups
            };
        case '@GROUP/START_CREATE_GROUP':
            return {
                ...state,
                creatingGroup: true
            };
        case '@GROUP/END_CREATE_GROUP':
            if (!action.group)
                return {
                    ...state,
                    creatingGroup: false
                };
            var newGroups = state.groups.slice();
            newGroups.unshift(action.group);
            return {
                ...state,
                creatingGroup: false,
                groups: newGroups
            };
        case '@GROUP/SET_GROUP_SCREEN_NAME':
            return{
                ...state,
                groupScreenName: action.name
            };
        case '@GROUP/UPDATE_GROUP':
            var tempGroupNames=state.groups;
            tempGroupNames.push({name: action.groupName});
            return{
                ...state,
                groups: tempGroupNames
            };
        default:
            return state;
    }
}
const initEventFormState = {
    eventStartDate: '',
    eventEndDate: '',
    eventTitle: '',
    eventGroup: '',
};

//Event Form Reducer
export function eventForm(state = initEventFormState, action) {
    switch (action.type) {
        case '@EVENT_FORM/INPUT_EVENT_TITLE':
            return {
                ...state,
                eventTitle: action.eventTitle
            };
        case '@EVENT_FORM/INPUT_DANGER':
            return {
                ...state,
                inputDanger: action.danger
            };
        case '@EVENT_FORM/SELECT_START_DATE':
            return {
                ...state,
                eventStartDate: action.eventStartDate
            };
        case '@EVENT_FORM/SELECT_END_DATE':
            return{
                ...state,
                eventEndDate: action.eventEndDate
            };
        case '@EVENT_FORM/SELECT_GROUP':
            return{
                ...state,
                eventGroup: action.eventGroup
            }
        default:
            return state;
    }
}
