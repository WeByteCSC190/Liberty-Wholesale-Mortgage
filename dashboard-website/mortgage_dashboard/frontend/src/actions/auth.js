import Cookies from 'js-cookie';
import axios from 'axios';
import{
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL
} from './types';

export const logout = () => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken')
        }
    }; 
    const body = JSON.stringify({'withCredentials': true});

    try{
        const rest = await axios.post(`${process.env.REACT_APP_API_URL}/accounts/logout`, body, config);
        
        if(rest.data.success){
            dispatch({
                type: LOGOUT_SUCCESS,
            });
        } else{
            dispatch({
                type: LOGOUT_FAIL
            });            
        }
    }catch(err){
        dispatch({
            type: LOGOUT_FAIL
        });
    }    
};

export const login = (username,password) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken') 
        }
    }; 

    const body = JSON.stringify({username,password});

    try{
        const rest = await axios.post(`${process.env.REACT_APP_API_URL}/accounts/login`, body, config);
        
        if(rest.data.success){
            dispatch({
                type: LOGIN_SUCCESS,
                payload: rest.data.username
            });
        } else{
            dispatch({
                type: LOGIN_FAIL
            });            
        }
    }catch(err){
        dispatch({
            type: LOGIN_FAIL
        });
    }    
};

export const register = (username,password,re_password) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken')
        }
    }; 

    const body = JSON.stringify({username,password,re_password});

    try{
        const rest = await axios.post(`${process.env.REACT_APP_API_URL}/accounts/register`,body, config);
        
        if(rest.data.error){
            dispatch({
                type: REGISTER_FAIL
            });
        } else{
            dispatch({
                type: REGISTER_SUCCESS
            });            
        }
    }catch(err){
        dispatch({
            type: REGISTER_FAIL
        });
    }
};

