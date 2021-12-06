import api from '../api/api';

export const FETCH_PRINTS_BEGIN   = 'FETCH_PRINTS_BEGIN'
export const FETCH_PRINTS_SUCCESS = 'FETCH_PRINTS_SUCCESS'
export const FETCH_PRINTS_FAILURE = 'FETCH_PRINTS_FAILURE'

export const fetchPrintsBegin = () => ({
  type: FETCH_PRINTS_BEGIN
})

export const fetchPrintsSuccess = data => ({
  type: FETCH_PRINTS_SUCCESS,
  payload: {
    printsInfo: data.info,
    printsList: data.records
  }
})

export const fetchPrinstFailure = error => ({
  type: FETCH_PRINTS_FAILURE,
  payload: { error }
})

export function fetchPrints(page = 1) {
  return async dispatch => {
    dispatch(fetchPrintsBegin());
    try {
      const response = await api.get(`/prints/${page}`)
      const data = response.data
      dispatch(fetchPrintsSuccess(data))
      return data
    } catch (error) {
      console.log(error, 'ERROR')
      return dispatch(fetchPrinstFailure(error))
    }
  }
}