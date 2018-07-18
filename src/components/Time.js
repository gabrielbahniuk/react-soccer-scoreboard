import React from 'react';

import BotaoGol from './BotaoGol';
import BotaoAnularGol from './BotaoAnularGol';

const Time = ({nome, gols, marcarGol, anularGol}) => {
    return (
        <div>
            <h4>{nome}</h4>
            <h4>{gols}</h4>                
            <BotaoGol marcarGol={marcarGol} time={nome} />
            <BotaoAnularGol anularGol={anularGol} gols={gols}/>
        </div>
    );
};
export default Time;