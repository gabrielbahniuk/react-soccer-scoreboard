import React, {Component} from 'react';

export default class BotaoResetar extends Component {

    constructor() {
        super();
        this.handleClickReset = this.handleClickReset.bind(this)
    }

    handleClickReset(evt) {
        evt.preventDefault();
        this.props.resetar();
    }

    render() {
        const styleButton = {margin: '1em 0 1em 0'}
        return (
            <button className="btn btn-danger btn-lg" style={styleButton} onClick={this.handleClickReset}>Resetar Placar</button>
        );
    }
}