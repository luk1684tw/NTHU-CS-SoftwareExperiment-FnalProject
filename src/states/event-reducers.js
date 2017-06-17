const initEventState = {
    listingEvents: false,
    listingMoreEvents: undefined, // id of post from which to start
    events: [{id: '94879487',StartDate: '2017/6/16', EndDate: '2017/6/16', Group: '測試用', Title:'和女朋友吃飯', Description:'好吃'}, {id: '94539453',StartDate: '2017/6/17', EndDate: '2017/6/18', Group: '測試用', Title:'和老婆約會', Description:'和老婆約會'}],
    hasMore: true,
    creatingEvent: false,
    creatingVote: false
};
export function event(state = initEventState, action) {
    switch (action.type) {
        case '@EVENT/START_LIST_EVENTS':
            return {
                ...state,
                listingEvents: true,
                listingMoreEvents: undefined
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
                hasMore: action.evnets.length > 0
            };
        case '@EVENT/START_LIST_MORE_EVENTS':
            return {
                ...state,
                listingMoreEvents: action.start
            };
        case '@EVENT/END_LIST_MORE_EVENTS':
            if (!action.events)
                return state;
            return {
                ...state,
                evnets: [...state.events, ...action.events],
                hasMore: action.events.length > 0
            };
        case '@EVENT/START_CREATE_EVENT':
            return {
                ...state,
                creatingEVENT: true
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
