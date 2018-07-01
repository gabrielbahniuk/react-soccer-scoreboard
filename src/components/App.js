import React from 'react';

import PlacarContainer from './PlacarContainer';
import Time from './Time';

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

export default class App extends React.Component {
    render() {
        return <PlacarContainer {...dados} />;          
    }
}