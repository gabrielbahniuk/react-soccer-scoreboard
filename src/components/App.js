import React, {Component} from 'react';

import PlacarContainer from './PlacarContainer';

export default class App extends Component {
    render() {   
        const dados = {
            partida: {
                estadio : 'Maracanã',
                data: '25/07/2018',
                horario: '09:00h'
            },
            casa : {
                nome: 'Brasil'
            },
            visitante : {
                nome : 'Alemanha'
            }
        };

        return (            
            <div>                                   
                <PlacarContainer {...dados} />        
            </div>
        );          
    }
}