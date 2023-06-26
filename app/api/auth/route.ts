// next cookie 도 참고해 보기
// https://nextjs.org/docs/app/api-reference/functions/cookies

import Cookies from 'js-cookie';

import { USER, TOKEN_NAME, EMPID, SEARCH_PARAMS } from '@/app/shared/config/commonCode';
import { environment } from '@/app/shared/config/environment';

const getSearchParams = () => {
  return Cookies.get(SEARCH_PARAMS);
}

const setSearchParams = (value: any) => {
  Cookies.set(SEARCH_PARAMS, value);
}

const removeSearchParams = () => {
  sessionStorage.removeItem(SEARCH_PARAMS);
}

const getEmpId = () => {
  return Cookies.get(EMPID);
}

const setEmpId = (empid: string) => {
  Cookies.set(EMPID, empid);
}

const getToken = () => {
  return Cookies.get(TOKEN_NAME);
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

  // return Cookies.get(USER);
}

const setUserInfo = (info: string): void => {
  Cookies.set(USER, info);
}

const setToken = (token: string) => {
  Cookies.set(TOKEN_NAME, token);
}

const removeToken = () => {
  sessionStorage.removeItem(TOKEN_NAME);
}

const ssoLogin = () => {
  // console.log('sso login', process.env.NEXT_PUBLIC_MODE)
  // admin 에서는 직접 로그인 막음
  // window.location.href = `${process.env.NEXT_PUBLIC_SSO_AUTH}`;

  sessionStorage.clear();

  const LOGOUT_URL = window.location.protocol + '//' + window.location.host + '/auth/logout'
  // window.location.href = LOGOUT_URL;
}

const ssoLogout = () => {
  removeToken();
  sessionStorage.clear();
  // window.location.href = `${environment.sso.logout}`;
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
  removeToken,
  hasValidToken, 
  getIsAdmin,
  getSearchParams, setSearchParams, removeSearchParams
} 