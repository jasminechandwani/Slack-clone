import { Button } from '@mui/material';
import React from 'react';
import styled from 'styled-components'
import { auth, provider } from '../firebase';

function Login() {
    const signIn = e => {
        e.preventDefault();

        auth.signInWithPopup(provider).catch((error) =>
            alert(error.message)
        );
    }

    return (
        <LoginContainer>
            <LoginInnerContainer>
                <img
                    src='https://assets.stickpng.com/images/5cb480cd5f1b6d3fbadece79.png'
                    alt='' />

                <h1>Sign in </h1>
                <p>jasmine.slack.com</p>

                <Button onClick={signIn}>
                    Sign in with Google
                </Button>

            </LoginInnerContainer>
        </LoginContainer>
    )
}

export default Login;

const LoginContainer = styled.div`
background-color: #f8f8f8;
height: 100vh;
display: grid;
place-items: center;
`;

const LoginInnerContainer = styled.div`
padding: 100px;
text-align: center;
background-color: white;
border-radius: 10px;
box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

 > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
 }

 >button {
    margin-top: 50px;
    text-transform: inherit !important;
    background: #0a8d4d !important;
    color: white;
 }
`;
