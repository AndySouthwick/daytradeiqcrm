export const actionTypes = {
    LOGIN: '[Auth] Login',
    LOGIN_SUCCESS: '[Auth] Login Success',
    LOGIN_ERROR: '[Auth] Login Error',
    LOGOUT: '[Auth] Logout',
    SET_PROFILE: '[Auth] Set Profile',

}

export function login() {
    return{
        type: actionTypes.LOGIN
    }
}
export function loginSuccess(signinUserData) {
    return{
        type: actionTypes.LOGIN_SUCCESS,
        payload:signinUserData
    }
}
export function loginError(message) {
    return {
        type: actionTypes.LOGIN_ERROR,
        payload: message
    }
}
export function logout() {
    return{
        type: actionTypes.LOGOUT
    }
}
export function setProfile(profileData) {
    return {
        type: actionTypes.SET_PROFILE,
        payload: profileData
    }
}
export function signUpError(message) {
    return{
        type: actionTypes.SIGN_UP_ERROR,
        payload: message
    }
}