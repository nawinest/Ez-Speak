
import { START_LOADING, STOP_LOADING } from '../actions/type'
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

        // create course
        const response = await APIManager.post(endpoint.COURSE_CREATED, courseDetail, configUser)
        // await dispatch({
        //     type: USER_LOADED,
        //     payload: null
        // })

        // await dispatch({
        //     type: STOP_LOADING
        // })
    } catch (e) {
        const errorData = e.response.data
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