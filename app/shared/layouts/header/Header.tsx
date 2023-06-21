"use client"

import { Button } from 'primereact/button';
import * as React from 'react';
import Link from 'next/link';
import logo from '@/assets/images/cloud.png';
import { getToken, getUserInfo } from '@/redux/services/base/base-api.service';
import './header.css';

interface IProps {
    prefix?: string;
    handleOpen: React.MouseEventHandler<HTMLButtonElement>;
}

const Header: React.FC<IProps> = ({prefix, handleOpen}) => {

    const isLogin = getToken() ? true : false

    //user 정보를 보여준다
    let userData = getUserInfo() //JSON.parse(getUserInfo())
    let userName = userData ? userData.emm : '로그인 안됨'
    
    let lgnDt = userData ? userData.lgnTs.slice(0,3).join('.') : ''
    let lgnTs = userData ? userData.lgnTs.slice(3,6).join(':') : ''

    let userAccessInfo = `최근 접속 ${lgnDt}  ${lgnTs}`;

    const logoutFunc = () => {
        localStorage.clear();
        // window.location.href = process.env.NEXT_PUBLIC_SSO_LOGOUT; 
        window.open(process.env.NEXT_PUBLIC_SSO_LOGOUT, '_self');
    }

    return(
    <div className='customHeader'>
        <div className='headerInnerContents'>
            <Button className='menu p-button-text' icon='pi pi-bars' onClick={handleOpen} />

            <Link href='/' className='logoTitle'>
                <span className='portalName'>{prefix} Next.js CMS Starter Kit</span>
            </Link>
  
            {
                !isLogin ? 
                <Button label='login' className='ml-auto' 
                    onClick={() => { 
                        // window.location.href = process.env.NEXT_PUBLIC_SSO_AUTH
                        window.open(process.env.NEXT_PUBLIC_SSO_AUTH)
                    }}
                />
                :
                <>
                    <span className='accessInfo'>{userAccessInfo}</span>
                    <span className='profile'>
                        <i className='pi pi-user' />
                    </span>
                    <span>{userName}</span>

                    <Button label='logout' className='ml20' onClick={logoutFunc} />
                </>
            }

            <Link href='/auth/logout' className=''>
                <Button label='logout' className='ml20'/>
            </Link>
        </div>
    </div>
    )
}
export default Header;