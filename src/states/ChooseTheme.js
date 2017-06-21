
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
