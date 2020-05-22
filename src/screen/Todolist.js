import React from 'react';
import Button from '../components/Button';
import Input from '../components/Input';

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
            <div>
                <form onSubmit={this.handlesubmit}>
                    <label>
                        <p>Desafio ToDo</p>
                        <InputFrm type="text" ref={node => this.inputText = node} placeholder="digitar aqui"/>
                    </label>
                    <Button>Adicionar</Button>
                </form>
                {this.state.assignment.map(item => <p>{item}</p>)}
            </div>
        );
    }
}