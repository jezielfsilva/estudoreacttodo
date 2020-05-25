import React from 'react';
import styled from 'styled-components';

const InputFrm = styled.input`
    width: 20rem;
    height: 2rem;
    border-radius: 0.25em;
    border: 0.0625em solid #2F6F2F;
    padding: 0 0.5rem;
    outline: none;
`;

const Label = styled.label`
    display: flex;
    flex-direction: column;

    p{
        color: #970620;
        margin-left: 0.5rem;
        font-family: 'Open Sans', sans-serif;
        font-size: 1.5em;
    }
`;

export default function Input(props) {
    return (
        <>
            <Label>
                <p>{props.labelText}</p>
                <InputFrm type={props.type} ref={props.func} placeholder={props.placeholder}/>
            </Label>
        </>
    );
}