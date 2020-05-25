import React from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import styled from 'styled-components';

const Screen = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    background: #FF4425;
`;

const ContainerFrm = styled.div`
    width: 30vw;
    min-height: 30vh;
    background: #FFFFFF;
    border-radius: 0.25em;
    display: flex;
    justify-content: center;
    box-shadow: 2px 1px 2px #333131;
`;

const Form = styled.form`
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TextList = styled.p`
    font-size: 1.4em;
    color: #f5f5fc;
    text-shadow: 2px 1px 2px #333131;
`;

export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            assignment: [],
        }
    }

    handlesubmit = ev => {
        ev.preventDefault();
        const { assignment } = this.state

        assignment.push(this.inputText.value)

        this.setState ({
            assignment,
        })

        this.inputText.value = '';
    }

    render() {
        return (
            <Screen>
                <ContainerFrm>
                    <Form onSubmit={this.handlesubmit}>
                        <label>
                            <Input labelText="Desafio to do" type="text" func={node => this.inputText = node} placeholder="digitar aqui"/>
                        </label>
                        <Button>Adicionar</Button>
                    </Form>
                </ContainerFrm>
                {this.state.assignment.map(item => <TextList>{item}</TextList>)}
            </Screen>
        );
    }
}