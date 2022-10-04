import Cookies from 'js-cookie';
import axios from 'axios';
import{
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from './types';

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

