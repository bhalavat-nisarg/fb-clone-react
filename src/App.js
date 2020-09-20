import React, { useEffect } from 'react';
import signIn from './api/signIn';
import './App.css';
import { userRef } from './firebase';

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

    return (
        <div className="App">
            <button onClick={() => onSignIn()}>Sign Up</button>
        </div>
    );
}

export default App;
