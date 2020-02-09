
import { START_LOADING, STOP_LOADING, LOADED_COURSE_SUGGESTION } from '../actions/type'
import endpoint from '../Utility/Endpoint'
import { APIManager } from '../Utility/APIManager'
import { showErrorDialog } from '../Utility/Global'

//create course
export const createCourse = (data) => async dispatch => {
    try {
        let access_token = localStorage.getItem("access_token")
        const configUser = {
            headers: {
                'Content-type': 'Application/json',
                Authorization: access_token
            }
        }

        const courseDetail = {
            name: data.courseName,
            status: "ACTIVE",
            type: "sport",
            level: data.courseLevel,
            levelRequire: 0,
            description: data.courseDescription,
            price: 0,
            cover_image: ""
        }

        await dispatch({
            type: START_LOADING
        })
        await APIManager.post(endpoint.COURSE_CREATED, courseDetail, configUser)
        await dispatch({
            type: STOP_LOADING
        })
    } catch (e) {
        const errorStatus = e.response.status

        if (errorStatus === 403) {
            showErrorDialog("คุณไม่มีสิทธิ์ในการสร้างคอร์ส กรุณาติดต่อผู้ดูแลระบบ")
        } else {
            showErrorDialog()
        }

        await dispatch({
            type: STOP_LOADING
        })
    }
}

//create course
export const getCourseSuggestion = (types) => async dispatch => {
    try {
        let access_token = localStorage.getItem("access_token")
        if (access_token === null || access_token === undefined) {
            access_token = ""
        }
        
        const configGetCourse = {
            headers: {
                'Content-type': 'Application/json',
                Authorization: access_token
            }
        }

        const body = {
            types: types
        }

        await dispatch({
            type: START_LOADING
        })

        // create course
        const response = await APIManager.post(endpoint.GET_SUGGESTION_COURSE+"?page="+1+"&limit="+5, body, configGetCourse)
        await dispatch({
            type: LOADED_COURSE_SUGGESTION,
            payload: response.data.content
        })
    
        await dispatch({
            type: STOP_LOADING
        })
        
    } catch (e) {
        showErrorDialog()

        await dispatch({
            type: STOP_LOADING
        })
    }
}

export const getCourseDetail = (course_id) => async dispatch => {
    try {
        let access_token = localStorage.getItem("access_token")
        if (access_token === null || access_token === undefined) {
            access_token = ""
        }
        
        const configGetCourse = {
            headers: {
                'Content-type': 'Application/json',
                Authorization: access_token
            }
        }
        
        await dispatch({
            type: START_LOADING
        })

        // create course
        const response = await APIManager.get(endpoint.GET_COURSE_DETAIL + "?course_id=" + course_id, configGetCourse)
        
        await dispatch({
            type: STOP_LOADING
        })

        // return response.data.content
    } catch (e) {
        showErrorDialog()

        await dispatch({
            type: STOP_LOADING
        })
    }
}