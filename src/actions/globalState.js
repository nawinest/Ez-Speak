
import { START_LOADING, STOP_LOADING } from '../actions/type'

//start loading
export const startLoading = () => async dispatch => {
    dispatch({
        type: START_LOADING
    })
}

//start loading
export const stopLoading = () => async dispatch => {
    dispatch({
        type: STOP_LOADING
    })
}

