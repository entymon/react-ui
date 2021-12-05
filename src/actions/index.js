export const selectPage = (page) => {
    return {
        type: 'PAGE_SELECTED',
        payload: page
    }
}

export const selectPrint = (print) => {
    return {
        type: 'PRINT_SELECTED',
        payload: print
    }
}

export const loadPrints = (prints) => {
    return {
        type: 'LOAD_NEW_PAGE',
        payload: prints
    }
}