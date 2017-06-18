const initEventsState = {
    listingEvents: false,
    events: [{id: '94879487',StartDate: '2017/6/16', EndDate: '2017/6/16', Group: '測試用', Title:'和女朋友吃飯', Description:'好吃'}, {id: '94539453',StartDate: '2017/6/17', EndDate: '2017/6/18', Group: '測試用', Title:'和老婆約會', Description:'和老婆約會'}],
    creatingEvent: false,
};
export function event(state = initEventsState, action) {
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
    groups: [{name: '女朋友'}, {name: '老婆'}],
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
        default:
            return state;
    }
}


const initEventForm = {
    id: '',
    startDate: '',
    endDate: '',
    title: '',
    group: '',
    inputDanger: false
};

export function eventform(state = initEventForm, action) {
    switch (action.type) {
        case '@EVENTFORM/STARTDATE' :
            return {
                ...state,
                startDate: action.date
            };
        case '@EVENTFORM/ENDDATE' :
            return {
                ...state,
                endDate: action.date
            };
        case '@EVENTFORM/TITLE' :
            return {
                ...state,
                title: action.title
            };
        default: return {
            ...state
        };
    }
}
