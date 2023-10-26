"use client"

import React from "react";
import {signIn, signOut, useSession} from "next-auth/react";

export default function Home() {
    const { data, status } = useSession()

    if(status === 'loading'){
        return <></>;
    }
    if(status === 'authenticated'){
        console.log(data);
        return <div>
            <div>{data.user?.name}</div>
            <button onClick={()=> signOut()}>logout</button>
        </div>
    }

    return <button onClick={()=> signIn()}>LOGIN</button>
}
