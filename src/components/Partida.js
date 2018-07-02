import React from 'react';

export default class Partida extends React.Component {

    render() {
        const divStyle = {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        };        
        return (
            <section>
                <div style={divStyle}>
                    <h3>Placar da Rodada</h3>
                    <h5>Estádio: { this.props.estadio }</h5>
                    <h5>Data/Hora: { this.props.data } { this.props.horario }</h5>
                </div>                
            </section>
        );
    }
}