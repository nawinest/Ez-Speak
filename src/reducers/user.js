import {REGISTER_USER_SUCCESS, REGISTER_FAIL} from '../actions/type'

const initialState = {
    loading: true,
    user: null
}

export default function(state=initialState , action){
    const {type , payload} = action
    switch(type){
        case REGISTER_USER_SUCCESS:
            return {
                ...state, customer: {...payload}, isRegistered: true , loading:false
            }
        case REGISTER_FAIL:
            return {
                ...state
            }
        default:
            return state
    }
}