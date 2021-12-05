import { combineReducers } from 'redux'

const selectedPageReducer = (selectedPage = null, action) => {
    if (action.type = 'PAGE_SELECTED') {
        return action.payload;
    }

    return selectedPage;
}

const printsReducer = () => {
    return [
        {
            title: 'print1',
            desc: 'somethidnd1'
        },
        {
            title: 'print2',
            desc: 'somethidnd2'
        }
    ]
}

const selectedPrintReducer = (selectedPrint = null, action) => {
    if (action.type = 'PRINT_SELECTED') {
        return action.payload;
    }

    return selectedPrint;
}

export default combineReducers({
    prints: printsReducer,
    selectedPrint: selectedPrintReducer,
    selectedPage: selectedPageReducer
})