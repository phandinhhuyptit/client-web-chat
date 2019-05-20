
import * as authCotants from '../Contants/authCotants'
import * as loadContant from '../Contants/loadContant';
import axios from 'axios';

export const handleGettUsers = () =>{

    return (dispatch)=> {
        dispatch(setItemsLoading());
        axios.get('http://localhost:5000/api/user')
        .then(res =>{
            console.log(res)
            dispatch(getUsers(res.data))
        })

    }
}

export const getUserFail = () =>{

    return {

        type : authCotants.getUserFail

    }
}
export const getUsers= (users) =>{

    return {

        type : authCotants.getUsers,
        payload : users 

    }
}


export const setItemsLoading  = () =>{


    return {

            type : loadContant.setItemsLoading,
            isLoad : true

    }

}