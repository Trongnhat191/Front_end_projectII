import actionTypes from './actionTypes';
import { getAllCodeService, createNewUserService, getAllUsers } from '../../services/userService';

// export const fetchGenderStart = () => ({
//     type: actionTypes.FETCH_GENDER_START
// })

//GENDER
export const fetchGenderStart =  () => {
    return async(dispatch, getState) => {
        try {
            dispatch({type: actionTypes.FETCH_GENDER_START})
            let res = await getAllCodeService("GENDER");
            if (res && res.errCode === 0) {
                dispatch(fetchGenderSuccess(res.data));
            }
            else {
                dispatch(fetchGenderFailed());
            }
        } catch (error) {
            dispatch(fetchGenderFailed());
            console.log('start err', error)
        }
    }

}
export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: genderData
})
export const fetchGenderFailed = () => ({
    type: actionTypes.FETCH_GENDER_FAILED
})

//ROLE
export const fetchRoleStart =  () => {
    return async(dispatch, getState) => {
        try {
            let res = await getAllCodeService("ROLE");
            if (res && res.errCode === 0) {
                dispatch(fetchRoleSuccess(res.data));
            }
            else {
                dispatch(fetchRoleFailed());
            }
        } catch (error) {
            dispatch(fetchRoleFailed());
            console.log('start err', error)
        }
    }

}
export const fetchRoleSuccess = (roleData) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data: roleData
})

export const fetchRoleFailed = () => ({
    type: actionTypes.FETCH_ROLE_FAILED
})


//create user
export const createNewUser = (data) => {
    return async(dispatch, getState) => {
        try {
            let res = await createNewUserService(data);
            console.log('check create user', res);
            if (res && res.errCode === 0) {
                dispatch(createUserSuccess());
            }
            else {
                dispatch(createUserFailed());
            }
        } catch (error) {
            dispatch(createUserFailed());
            console.log('create user failed err', error)
        }
    }
}

export const createUserSuccess = () => ({
    type: 'CREATE_USER_SUCCESS'
})

export const createUserFailed = () => ({
    type: 'CREATE_USER_FAILED'
})


export const fetchAllUsersStart =  () => {
    return async(dispatch, getState) => {
        try {
            let res = await getAllUsers("ALL");
            if (res && res.errCode === 0) {
                dispatch(fetchAllUsersSuccess(res.users));
            }
            else {
                dispatch(fetchAllUsersFailed());
            }
        } catch (error) {
            dispatch(fetchAllUsersFailed());
            console.log('fetchAllUsersFailed err', error)
        }
    }
}

export const fetchAllUsersSuccess = (data) => ({
    type: 'FETCH_ALL_USERS_SUCCESS',
    users: data
})

export const fetchAllUsersFailed = () => ({
    type: 'FETCH_ALL_USERS_FAILED'
})