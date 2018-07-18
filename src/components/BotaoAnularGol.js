import React, {Component} from 'react';

export default class BotaoAnularGol extends Component {

    constructor() {
        super();
        this.handleClickAnular = this.handleClickAnular.bind(this);
    }

    handleClickAnular(evt){
        evt.preventDefault();
        if (this.props.gols > 0)
            this.props.anularGol();
    }

    render() {
        return (
            <button className="btn btn-warning btn-md ml-3" onClick={this.handleClickAnular}>Anular!</button>
        );
    }

}