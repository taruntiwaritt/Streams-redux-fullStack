import streams from '../apis/streams'
import {SIGN_IN,SIGN_OUT} from "./types"

export const signIn = (userId) =>{
    return{
            payload:userId,
        type: SIGN_IN
    }
};

export const signOut = () =>{
    return{

        type: SIGN_OUT
    }
};

export const createStream = (formValues) => async dispatch =>{
    streams.post('streams',formValues);
};