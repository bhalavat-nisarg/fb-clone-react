import React, { useEffect } from 'react';
import { userRef } from './firebase';

import 'materialize-css/dist/css/materialize.min.css';
import './App.css';

import signIn from './api/signIn';
import signUp from './api/signUp';

function App() {
    useEffect(() => {
        function callFunc() {
            userRef.push({
                email: 'test1@gmail.com',
                password: '123456',
            });
        }
        // callFunc();
    }, []);

    const onSignIn = () => {
        const result = signIn('demonew@gmail.com', 'password');
        console.log(result);
    };

    const onSignUp = () => {
        const result = signUp('demonew@gmail.com', 'password', 'Dhaval');
        console.log(result);
    };

    return (
        <div className="App">
            <button onClick={() => onSignIn()}>Sign In</button>
            <button onClick={() => onSignUp()}>Sign Up</button>
        </div>
    );
}

export default App;
