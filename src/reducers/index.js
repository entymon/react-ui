import { combineReducers } from 'redux'

const selectedPageReducer = (state = {}, action) => {
    switch (action.type) {
        case 'PAGE_SELECTED':
        return {
            ...state,
            selectedPage: action.payload
        }   
        default:
        return state 
    }
}

const printsReducer = (state = {}, action) => {
    switch (action.type) {
        case 'LOAD_NEW_PAGE':
        return {
            ...state,
            prints: action.payload
        }   
        default:
        return state 
    }
}

const selectedPrintReducer = (state = {}, action) => {
    switch (action.type) {
        case 'PRINT_SELECTED':
        return {
            ...state,
            selectedPrint: action.payload
        }   
        default:
        return state 
    }
}

export default combineReducers({
    prints: printsReducer,
    selectedPrint: selectedPrintReducer,
    selectedPage: selectedPageReducer
})