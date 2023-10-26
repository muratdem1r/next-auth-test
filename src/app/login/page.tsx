"use client"

import React, {useReducer} from 'react';
import { NextPage } from "next";
import {signIn} from "next-auth/react";

interface UserInfo{
    email: string,
    password: string
}

const Login: NextPage = () : JSX.Element => {
    // const [userInfo, setUserInfo] = useState({email: '', password: ''})
    const [userInfo, updateUserInfo] = useReducer((prev: UserInfo, next: Partial<UserInfo>) => ({...prev, ...next}),
        {email: '', password: ''})

    const loginHandler: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        await signIn('credentials', {...userInfo, callbackUrl: '/'})
    }

    return (
        <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <form className='flex flex-col gap-10' onSubmit={loginHandler}>
                <input value={userInfo.email} onChange={({target}) => updateUserInfo({email: target.value})} type="email"/>
                <input value={userInfo.password} onChange={({target}) => updateUserInfo({password: target.value})} type="password" name="password"/>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default Login;
