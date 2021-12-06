const stateInit = {
    selectedPage: 1
}

export const selectedPageReducer = (state = stateInit, action) => {
    if (action.type === 'SELECTED_PAGE') {
        return {
            ...state,
            selectedPage: action.payload
        }
    }
    return state
}