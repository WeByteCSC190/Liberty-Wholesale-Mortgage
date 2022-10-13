import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL
} from '../actions/types';

const initialState = {
    isAuthenticatied : null,
    username: '',
    fName: '',
    lName: '',
    nmlsID: '',
    ssn: ''
};

export default function(state = initialState, action){
    const {type, payload} = action;

    switch(type){
        default:
            return state            
        case LOGIN_FAIL:
        case LOGOUT_FAIL:
        case REGISTER_FAIL:
            return state
        case REGISTER_SUCCESS:
            return {
                ...state,
                isAuthenticatied: false
            }
        case LOGOUT_SUCCESS:
            return {
                ...state,
                isAuthenticatied: true,
                username: payload
            }
        case LOGIN_SUCCESS:
            return{
                ...state,
                isAuthenticatied: false,
                username: ''
            }            
    };
}
