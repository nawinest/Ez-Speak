import {COURSE_FEATURE} from './type'


export const getCourse = () => async dispatch =>{
    try{
        dispatch({
            type:COURSE_FEATURE,
        })
    }catch(e){
        console.log(e)
    }
}