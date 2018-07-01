import React from 'react';
import PropTypes from 'prop-types';

import Time from './Time';
import Partida from './Partida';

export default class PlacarContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            gols_casa : 0,
            gols_visitante : 0
        } 
        this.marcarGolCasa = this.marcarGolCasa.bind(this);
        this.marcarGolVisitante = this.marcarGolVisitante.bind(this);
        this.anularGolCasa = this.anularGolCasa.bind(this);
        this.anularGolVisitante = this.anularGolVisitante.bind(this);        
    }

    anularGolCasa = () => {
        this.setState({
            gols_casa : this.state.gols_casa - 1
        });
    }

    anularGolVisitante = () => {
        this.setState({
            gols_visitante : this.state.gols_visitante - 1
        });
    }

    marcarGolCasa = () => {
        this.setState({
            gols_casa : this.state.gols_casa + 1
        });
    }

    marcarGolVisitante = () => {
        this.setState({
            gols_visitante : this.state.gols_visitante + 1
        });
    }

    render() {
        const styleMainDiv = {display: 'flex', alignItems: 'center', alignContent: 'center', justifyContent: 'center'}
        const { partida, casa, visitante } = this.props;

        return (            
            <span>
            <div className="p-3" style={styleMainDiv}>                   
                        <Partida {...partida} />
            </div>
            <div className="jumbotron" style={styleMainDiv}>                     
                    <div className="card w-25 text-center p-3 align-middle">
                        <h2>Time da Casa</h2>
                        <Time nome={casa.nome}
                              gols={ this.state.gols_casa}
                              marcarGol={ this.marcarGolCasa }
                              anularGol={this.anularGolCasa}
                             />
                    </div>                  
                    <div className="card w-25 text-center p-3 ml-5">
                        <h2>Visitantes</h2>
                        <Time nome={visitante.nome}
                              gols={ this.state.gols_visitante}
                              marcarGol={ this.marcarGolVisitante}
                              anularGol={this.anularGolVisitante} />
                    </div>       
            </div>
            </span>
        );
    }
}

PlacarContainer.propTypes = {    
    casa : PropTypes.shape({
        nome : PropTypes.string.isRequired,
    }),
    visitante : PropTypes.shape({
        nome : PropTypes.string.isRequired,
    }),
    partida : PropTypes.shape({
        estadio : PropTypes.string.isRequired,
        data : PropTypes.string.isRequired,
        horario : PropTypes.string.isRequired
    })
};





