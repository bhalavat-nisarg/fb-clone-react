import React from 'react';
import { TextInput } from 'react-materialize';

export default () => {
    return (
        <div className="outerBox">
            <TextInput label="First Name" />
            <TextInput label="Last Name" />
            <TextInput label="Email" />
            <TextInput label="Password" />
        </div>
    );
};
