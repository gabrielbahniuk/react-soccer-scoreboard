import React from 'react';

const Partida = ({estadio, data, horario}) => {
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
                <h5>Estádio: { estadio }</h5>
                <h5>Data/Hora: { data } { horario }</h5>
            </div>                
        </section>
    );
};
export default Partida;