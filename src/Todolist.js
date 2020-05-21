import React from 'react';

export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            assignment: [],
        }
    }

    handleChange(event) {
        this.setState({ assignment: event.target.value })
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text" value={this.state.assignment} onChange={(event) => this.handleChange(event)} />
                    <button>Adicionar</button>
                </form>
                <p>{this.state.assignment}</p>
            </div>
        );
    }
}