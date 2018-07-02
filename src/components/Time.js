import React from 'react';

import BotaoGol from './BotaoGol';
import BotaoAnularGol from './BotaoAnularGol';

export default class Time extends React.Component {
    render() {
        return (
            <div>
                <h4>{this.props.nome}</h4>
                <h4>{this.props.gols}</h4>                
                <BotaoGol marcarGol={this.props.marcarGol} time={this.props.nome} />
                <BotaoAnularGol anularGol={this.props.anularGol} gols={this.props.gols}/>
            </div>
        );
    }
}