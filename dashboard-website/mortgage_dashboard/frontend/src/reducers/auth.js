import {
    REGISTER_SUCCESS,
    REGISTER_FAIL
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
        case REGISTER_FAIL:
            return state
        case REGISTER_SUCCESS:
            return {
                ...state,
                isAuthenticatied: false
            }
    }
}