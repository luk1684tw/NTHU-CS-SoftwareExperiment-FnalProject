import {AsyncStorage} from 'react-native';

export function setTheme(mode) {
    return {
        type: '@THEME/SELECTMODE',
        mode: mode
    };
}

const initThemeState = {
    mode: 0
};

export function theme(state = initThemeState, action) {
    if (action.mode){
        AsyncStorage.setItem('mode',JSON.stringify(action.mode));
        console.log('mode saved',action.mode);
    }
    switch (action.type) {
        case '@THEME/SELECTMODE':
            return {
                mode: action.mode
            };
        default:
            return {
                ...state
            }

    }

}
