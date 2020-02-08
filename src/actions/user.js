
import { START_LOADING, STOP_LOADING } from '../actions/type'
import endpoint from '../Utility/Endpoint'
import { APIManager } from '../Utility/APIManager'


//Register 
export const register = (username, password, email, showErrorDialog, gotoNextStep) => async dispatch => {
    try {

        console.log(password)
        const config = {
            headers: {
                'Content-type': 'Application/json',
                Authorization: ''
            }
        }

        const data = {
            firstName: "",
            lastName: "",
            username: username,
            password: password,
            phone: "",
            mobile: "",
            email: email,
            dateOfBirth: ""
        }

        await dispatch({
            type: START_LOADING
        })

        const res = await APIManager.post(endpoint.REGISTER_PATH_CUSTOMER, data, config)
        gotoNextStep()
        await dispatch({
            type: STOP_LOADING
        })
    } catch (e) {
        console.log(e)
        if (showErrorDialog !== undefined){
            showErrorDialog()
        }
        await dispatch({
            type: STOP_LOADING
        })
    }
}
