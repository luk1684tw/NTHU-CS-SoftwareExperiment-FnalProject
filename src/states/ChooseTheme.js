export function setTheme(mode) {
    console.log('actions',mode);
    return {
        type: '@THEME/SELECTMODE',
        mode: mode
    };
}

const initThemeState = {
    mode: 0
};

export function theme(state = initThemeState, action) {
    console.log('tesssssst', action.mode);
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
