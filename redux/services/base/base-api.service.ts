"use client";

import * as commonCode from '@/app/shared/config/commonCode';

const EMPID: string = 'empid';
const USER: string = 'user';
const TOKEN_NAME: string = 'access_token';
const REFRESH_TOKEN: string = 'refresh_token';
const SEARCH_PARAMS: any = 'search_params';

const getSearchParams = () => {
    return localStorage.getItem(SEARCH_PARAMS);
}

const setSearchParams = (value: any) => {
    localStorage.setItem(SEARCH_PARAMS, value);
}

const removeSearchParams = () => {
    localStorage.removeItem(SEARCH_PARAMS);
}

const getEmpId = () => {
    return localStorage.getItem(EMPID);
}

const setEmpId = (empid: string): void => {
    localStorage.setItem(EMPID, empid);
}

const getUserInfo = () => {
    return null
    
    // {
    //     id: 'admin',
    //     name: '관리자',
    //     empid: '12345',
    //     emn: '',
    //     lgnTs: '',
    // }

    // return localStorage.getItem(USER);
}

const setUserInfo = (info: string): void => {
    localStorage.setItem(USER, info);
}

const getToken = () => {
    return localStorage.getItem(TOKEN_NAME);
}

const setToken = (token: string) => {
    localStorage.setItem(TOKEN_NAME, token);
}

const getRefreshToken = () => {
    return localStorage.getItem(REFRESH_TOKEN);
}

const setRefreshToken = (token: string) => {
    localStorage.setItem(REFRESH_TOKEN, token);
}

const removeToken = () => {
    localStorage.removeItem(TOKEN_NAME);
    localStorage.removeItem(REFRESH_TOKEN);
}

const ssoLogin = () => {
    console.log('sso login', process.env.NEXT_PUBLIC_MODE)
    // admin 에서는 직접 로그인 막음
    // window.location.href = `${process.env.NEXT_PUBLIC_SSO_AUTH}`;

    localStorage.clear();

    const LOGOUT_URL = window.location.protocol + '//' + window.location.host + '/auth/logout'
    window.location.href = LOGOUT_URL;
}

const ssoLogout = () => {
    // admin 에서는 직접 로그아웃 막음
    // console.log('sso logout', process.env.NEXT_PUBLIC_MODE)
    // localStorage.clear();
    // window.location.href = `${process.env.NEXT_PUBLIC_SSO_LOGOUT}`;

    localStorage.clear();

    const LOGOUT_URL = window.location.protocol + '//' + window.location.host + '/auth/logout'
    window.location.href = LOGOUT_URL;

    console.log('sso logout', LOGOUT_URL)
}

const hasValidToken = () => {

    return true; //test

    /**
    if(getToken() !== null && getToken() !== undefined) {
        return true;
    } else {
        return false;
    }
    */
}

const getIsAdmin = () => {
    // userData.userDatacldPotlAthrList: []
    // "01" 포함되면 관리자, 없거나 "10"번 => 사용자
    
    return true; //test

    /** 
    let userData = JSON.parse(getUserInfo())    
    let isAdmin = false;
    // console.log('getIsAdmin userData', userData)

    if(userData && userData.cldPotlAthrList) {
        isAdmin = userData.cldPotlAthrList.includes(commonCode.ATHR_DCD_ADM)
    }
    return isAdmin;
    */
}

export { 
    ssoLogin,
    ssoLogout,
    getEmpId, 
    setEmpId,
    getUserInfo, 
    setUserInfo, 
    getToken, 
    setToken, 
    getRefreshToken, 
    setRefreshToken,
    removeToken,
    hasValidToken, 
    getIsAdmin,
    getSearchParams, setSearchParams, removeSearchParams
} 