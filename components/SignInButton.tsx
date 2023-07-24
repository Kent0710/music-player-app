'use client';

import Loading from './Loading';

import { signIn } from 'next-auth/react'


import Button from './Button';
import { useState } from 'react';

const SignInButton = () => {
    const [isSigningIn, setIsSigningIn] = useState(false);

    const handleSignInAuth0 = () => {
        setIsSigningIn(true);
        signIn('auth0', { callbackUrl : '/' } );
    }

    const handleSignInSoptify = () => {
        setIsSigningIn(true);
        signIn('spotify', { callbackUrl : "/" })
    }

    if (isSigningIn) return <Loading text='Redirecting to login page...'/>

    return (
        <>
            <Button 
                label='Get started with Auth0'
                onClick={handleSignInAuth0}
            />
            <Button 
                label='Get started with Spotify'
                onClick={handleSignInSoptify}
            />
        </>
    )
};

export default SignInButton;