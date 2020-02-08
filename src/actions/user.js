
import { START_LOADING, STOP_LOADING, LOGIN_SUCCESS, USER_LOADED, USER_LOADED_FAILED, LOGOUT_SUCCESS } from '../actions/type'
import endpoint from '../Utility/Endpoint'
import { APIManager, ValidateResponse } from '../Utility/APIManager'

//Register 
export const register = (username, password, email, showErrorDialog, gotoNextStep) => async dispatch => {
    try {


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

        // rigister
        await APIManager.post(endpoint.REGISTER_PATH_CUSTOMER, data, config)
        gotoNextStep()

        await dispatch({
            type: STOP_LOADING
        })
    } catch (e) {
        console.log(e)
        if (showErrorDialog !== undefined) {
            showErrorDialog()
        }
        await dispatch({
            type: STOP_LOADING
        })
    }
}

export const logout = () => async dispatch => {
    await dispatch({
        type: LOGOUT_SUCCESS
    })
}


export const login = (email, password, showErrorDialog) => async dispatch => {
    try {

        const headerBase64 = btoa(email + ":" + password)
        await dispatch({
            type: START_LOADING
        })

        const configLogin = {
            headers: {
                'Content-type': 'Application/json',
                Authorization: headerBase64
            }
        }

        const response = await APIManager.post(endpoint.CUSTOMER_LOGIN_PATH, {}, configLogin)

        await dispatch({
            type: LOGIN_SUCCESS,
            payload: response.data
        })

        await dispatch({
            type: STOP_LOADING
        })
    } catch (e) {
        console.log(e)
        if (showErrorDialog !== undefined) {
            showErrorDialog()
        }
        await dispatch({
            type: STOP_LOADING
        })
    }
}

export const activeNewUser = (email, verifyCode, showErrorDialog, gotoNextStep) => async dispatch => {
    const data = {
        email: email,
        verifyCode: verifyCode
    }

    const config = {
        headers: {
            'Content-type': 'Application/json',
            Authorization: ''
        }
    }


    await dispatch({
        type: START_LOADING
    })

    // rigister
    await APIManager.post(endpoint.ACTIVE_NEW_USER, data, config).then(function (response) {
        gotoNextStep()
    }).catch(function (error) {
        showErrorDialog()
        console.log(error);
    });

    await dispatch({
        type: STOP_LOADING
    })

}

export const loadUser = () => async dispatch => {
    try {
        await dispatch({
            type: START_LOADING
        })

        let access_token = localStorage.getItem("access_token")
        if (access_token === null || access_token === "" || access_token === undefined) {
            await dispatch({
                type: USER_LOADED_FAILED
            })
            await dispatch({
                type: STOP_LOADING
            })
            return;
        }

        const configUser = {
            headers: {
                'Content-type': 'Application/json',
                Authorization: access_token
            }
        }

        await dispatch({
            type: START_LOADING
        })

        // get user profile
        const response = await APIManager.get(endpoint.GET_USER_PROFILE, configUser)

        //handle error format of response
        if (!ValidateResponse(response)) {
            
        }
        
        await dispatch({
            type: USER_LOADED,
            payload: response.data.content[0]
        })

        await dispatch({
            type: STOP_LOADING
        })
    } catch (e) {
        console.log(e)
        await dispatch({
            type: STOP_LOADING
        })
    }
}