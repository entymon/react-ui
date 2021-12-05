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