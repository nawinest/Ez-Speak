import { LOADED_COURSE_SUGGESTION } from '../actions/type'

const initialState = {
    coursesSuggestion: []
}

export default function (state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case LOADED_COURSE_SUGGESTION:
            console.log(payload)
            return {
                ...state, coursesSuggestion: payload
            }
        default:
            return {
                ...state
            }
    }
}