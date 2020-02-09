import { START_LOADING, STOP_LOADING } from '../actions/type'

const initialState = {
    loading: false,
    loadingUser: false
}

export default function (state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case START_LOADING:
            if (payload && payload.type && payload.type === "user") {
                return {
                    ...state, loadingUser: true
                }
            }
            return {
                ...state, loading: true
            }
        case STOP_LOADING:
            if (payload && payload.type && payload.type === "user") {
                return {
                    ...state, loadingUser: false
                }
            }
            return {
                ...state, loading: false
            }
        default:
            return state
    }
}