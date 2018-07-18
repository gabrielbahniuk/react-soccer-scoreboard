import React, {Component} from 'react';

export default class BotaoGol extends Component {

    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {        
        event.preventDefault();              
        this.props.marcarGol();                       
    }

    render() {
        return (
            <span>            
            <button className="btn btn-success btn-lg" onClick={this.handleClick}>Gol ! </button>            
            </span>
        );
    }

}