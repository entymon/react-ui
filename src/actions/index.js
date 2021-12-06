export const selectPage = (page) => {
    return {
        type: 'SELECTED_PAGE',
        payload: page
    }
}

export const selectPrint = (print) => {
    return {
        type: 'SELECTED_PRINT',
        payload: print
    }
}

export const loadPrints = (prints) => {
    return {
        type: 'LOAD_NEW_PAGE',
        payload: prints
    }
}