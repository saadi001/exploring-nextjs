import { useRouter } from 'next/router';
import React from 'react';

const NotFound = () => {
    const router = useRouter();
    setTimeout(()=>{
        router.push('/')
    }, 4000)
    return (
        <div>
            <h1 >This is not found page</h1>
        </div>
    );
};

export default NotFound;