/* Actions */

export function setGroupNameText(groupNameText) {
    return {
        type: '@GROUPNAME/SET_GROUP_NAME_TEXT',
        groupNameText
    };
}

export function toggleGroupNameModal() {
    return {
        type: '@GROUPNAME/TOGGLE_GROUP_NAME_MODAL'
    };
}

/* Reducer */

const initGroupNameState = {
    groupNameText: '',
    modalToggle: false
};

export function groupName(state = initGroupNameState, action) {
    switch (action.type) {
        case '@GROUPNAME/SET_GROUP_NAME_TEXT':
            return {
                ...state,
                groupNameText: action.groupNameText
            };
        case '@GROUPNAME/TOGGLE_GROUP_NAME_MODAL':
            return {
                ...state,
                modalToggle: !state.modalToggle
            };
        default:
            return state;
    }
}
