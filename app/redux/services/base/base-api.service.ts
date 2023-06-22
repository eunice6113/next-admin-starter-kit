"use client";

import * as commonCode from '@/app/shared/config/commonCode';

const EMPID: string = 'empid';
const USER: string = 'user';
const TOKEN_NAME: string = 'access_token';
const REFRESH_TOKEN: string = 'refresh_token';
const SEARCH_PARAMS: any = 'search_params';

const getSearchParams = () => {
    if (typeof window !== 'undefined')
        return localStorage.getItem(SEARCH_PARAMS);
}

const setSearchParams = (value: any) => {
    if (typeof window !== 'undefined')
        localStorage.setItem(SEARCH_PARAMS, value);
}

const removeSearchParams = () => {
    if (typeof window !== 'undefined')
        localStorage.removeItem(SEARCH_PARAMS);
}

const getEmpId = () => {
    if (typeof window !== 'undefined')
        return localStorage.getItem(EMPID);
}

const setEmpId = (empid: string): void => {
    if (typeof window !== 'undefined')
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
    if (typeof window !== 'undefined')
        localStorage.setItem(USER, info);
}

const getToken = () => {
    if (typeof window !== 'undefined')
        return localStorage.getItem(TOKEN_NAME);
}

const setToken = (token: string) => {
    if (typeof window !== 'undefined')
        localStorage.setItem(TOKEN_NAME, token);
}

const getRefreshToken = () => {
    if (typeof window !== 'undefined')
        return localStorage.getItem(REFRESH_TOKEN);
}

const setRefreshToken = (token: string) => {
    if (typeof window !== 'undefined')
        localStorage.setItem(REFRESH_TOKEN, token);
}

const removeToken = () => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem(TOKEN_NAME);
        localStorage.removeItem(REFRESH_TOKEN);
    }
        
}

const ssoLogin = () => {
    console.log('sso login', process.env.NEXT_PUBLIC_MODE)
    // admin 에서는 직접 로그인 막음
    // window.location.href = `${process.env.NEXT_PUBLIC_SSO_AUTH}`;

    if (typeof window !== 'undefined')  localStorage.clear();

    const LOGOUT_URL = window.location.protocol + '//' + window.location.host + '/auth/logout'
    window.location.href = LOGOUT_URL;
}

const ssoLogout = () => {
    // admin 에서는 직접 로그아웃 막음
    // console.log('sso logout', process.env.NEXT_PUBLIC_MODE)
    // localStorage.clear();
    // window.location.href = `${process.env.NEXT_PUBLIC_SSO_LOGOUT}`;

    if (typeof window !== 'undefined')  localStorage.clear();

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