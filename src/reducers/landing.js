import { COURSE_FEATURE } from '../actions/type'

const initialState = {
    courses: ["nawin, phunswat"]
}

export default function (state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case COURSE_FEATURE:
            return {
                ...state
            }
        default:
            return {
                ...state
            }
    }
}