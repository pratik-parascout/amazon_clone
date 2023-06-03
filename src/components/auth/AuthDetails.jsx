import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { auth } from '../../config';
import { onAuthStateChanged } from 'firebase/auth';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);
    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
                nav("/")

            } else {
                setAuthUser(null);

            }
        });

        return () => {
            listen();
        }

    }, []
    );

    const nav = useNavigate();
    const userSignOut = () => {
        signOut(auth).then(() => {
            nav("/")
            console.log('signed out successfully')
        }).catch(error => console.log(error))
    }

    return (
        <div className='h-2/5 bottom-0'>
            {authUser ? <><p>{`Hello, ${authUser.email}`}</p>  <button onClick={userSignOut} >Sign out</button> </> : <p>Sign In</p>}
        </div>
    )
}

export default AuthDetails
