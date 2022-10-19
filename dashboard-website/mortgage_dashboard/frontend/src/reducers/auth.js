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

        case REGISTER_SUCCESS:
            return {
                ...state,
                isAuthenticatied: false
            }
        case LOGIN_SUCCESS:
            return{
                ...state,
                isAuthenticatied: true,
                username: payload
            }          
        case LOGOUT_SUCCESS:
            return {
                ...state,
                isAuthenticatied: false,
                username: ''
            }                        
        
        case REGISTER_FAIL:
        case LOGIN_FAIL:
        case LOGOUT_FAIL:
            return state         
        default:
            return state                   
    };
}
