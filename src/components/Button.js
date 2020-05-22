import React from 'react';
import styled from 'styled-components';

const ButtonSend = styled.button`
    width: 5rem;
    height: 2rem;
    border-radius: 0.25em;
    border: 0;
    font-size: 1em;
    color: #45FF00;
    background: #9967E9;
    margin: 0.6em;
`;

const Button = (props) => {
    return (
        <ButtonSend>{props.children}</ButtonSend>
    );
}

export default Button;