'use client';

import Loading from './Loading';

import { signIn } from 'next-auth/react'
import Button from './Button';
import { useState } from 'react';

const SignInButton = () => {
    const [isSigningIn, setIsSigningIn] = useState(false);

    const handleSignIn = () => {
        setIsSigningIn(true);
        signIn('auth0', { callbackUrl : '/' } );
    }

    if (isSigningIn) return <Loading />

    return (
        <Button 
            label='Get started'
            onClick={handleSignIn}
        />
    )
};

export default SignInButton;