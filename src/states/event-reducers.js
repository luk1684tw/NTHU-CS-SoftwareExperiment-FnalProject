const initEventState = {
    listingEvents: false,
    events: [],
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
                events: newEvents
            };
        case '@EVENT/UPDATE_EVENT':
            var newEvents = state.events;
            newEvents.push(action.event);
            return{
                ...state,
                events: newEvents
            };
        default:
            return state;
    }
}
//SideBar Group List
const initGroupState = {
    listingGroups: false,
    groups: [],
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

            console.log('action.groups in redux', action.group);
            return {
                ...state,
                creatingGroup: false,
                groups: action.group
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
    firstClickDate: '',
    secondClickDate: '',
    eventStartTime: '',
    eventEndTime: ''
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
        case '@EVENT_FORM/CHANGE_FIRST_DATE':
            return{
                ...state,
                firstClickDate: action.firstClickDate
            };
        case '@EVENT_FORM/CHANGE_SECOND_DATE':
            return{
                ...state,
                secondClickDate: action.secondClickDate
            };
        case '@EVENT_FORM/RESET_FORM':
            return{
                ...state,
                inputDanger: false,
                eventStartDate: '',
                eventEndDate: '',
                eventTitle: '',
                firstClickDate: '',
                secondClickDate: ''
            }
        case '@EVENT_FORM/SELECT_START_TIME':
            return{
                ...state,
                eventStartTime: action.eventStartTime
            }
        case '@EVENT_FORM/SELECT_END_TIME':
            return{
                ...state,
                eventEndTime: action.eventEndTime
            }
        default:
            return state;
    }
}

const initCorgiState = {
      pictureNum: 0,
};

export function corgi(state = initCorgiState, action) {
        switch (action.type) {
          case '@PICTURE/Animated':
                return {
                    pictureNum: (state.pictureNum<21) ?　state.pictureNum+1 : 0
                }
          default:
              return state;
        }
}
