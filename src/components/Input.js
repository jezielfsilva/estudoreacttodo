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

const Input = (props) => {
    return (
        <InputFrm type={props.type} ref={props.ref} placeholder={props.placeholder}/>
    );
}

export default Input;