import React, { Component, Fragment } from "react";

const moment = require("moment");

import Time from "./Time";
import Partida from "./Partida";
import BotaoResetar from "./BotaoResetar";
import styles from "./styles";
const DATE_FORMAT = "DD/MM/YY h:mm:ss";

export default class PlacarContainer extends Component {
  constructor() {
    super();
    this.state = {
      gols_casa: 0,
      gols_visitante: 0,
      historicoGols: []
    };
    this.marcarGolCasa = this.marcarGolCasa.bind(this);
    this.marcarGolVisitante = this.marcarGolVisitante.bind(this);
    this.anularGolCasa = this.anularGolCasa.bind(this);
    this.anularGolVisitante = this.anularGolVisitante.bind(this);
  }

  anularGolCasa = () => {
    const { gols_casa } = this.state;
    this.setState({
      gols_casa: gols_casa - 1
    });
  };

  anularGolVisitante = () => {
    const { gols_visitante } = this.state;
    this.setState({ gols_visitante: gols_visitante - 1 });
  };

  marcarGolCasa = () => {
    const { gols_casa } = this.state;
    const { casa } = this.props.time;
    this.setState({
      gols_casa: gols_casa + 1,
      historicoGols: [
        ...this.state.historicoGols,
        {
          time: casa,
          horario: moment().format(DATE_FORMAT)
        }
      ]
    });
  };

  marcarGolVisitante = () => {
    const { gols_visitante } = this.state;
    const { visitante } = this.props.time;
    this.setState({
      gols_visitante: gols_visitante + 1,
      historicoGols: [
        ...this.state.historicoGols,
        {
          time: visitante,
          horario: moment().format(DATE_FORMAT)
        }
      ]
    });
  };

  resetarPlacar = () => {
    this.setState({
      gols_visitante: 0,
      gols_casa: 0,
      historicoGols: []
    });
  };

  render() {
    const { partida, time } = this.props;
    const { gols_casa, gols_visitante } = this.state;
    return (
      <span>
        <div className="p-3" style={styles.placarContainerMain}>
          <Partida {...partida} />
          <BotaoResetar resetar={this.resetarPlacar} />
        </div>
        <div className="jumbotron" style={styles.placarContainerTimes}>
          <div className="card w-25 text-center p-3 align-middle">
            <h2>Time da Casa</h2>
            <Time
              nome={time.casa}
              gols={gols_casa}
              marcarGol={this.marcarGolCasa}
              anularGol={this.anularGolCasa}
            />
          </div>
          <div className="card w-25 text-center p-3 ml-5">
            <h2>Visitantes</h2>
            <Time
              nome={time.visitante}
              gols={gols_visitante}
              marcarGol={this.marcarGolVisitante}
              anularGol={this.anularGolVisitante}
            />
          </div>
        </div>
        {this.state.historicoGols.length > 0 && (
          <ul style={styles.historicoGols}>
            {this.state.historicoGols.map(gol => (
              <li
                className="alert alert-success w-25"
                role="alert"
                key={Math.random()}
                style={styles.historicoGol}
              >
                Gol do(a) <strong>{gol.time}</strong> - {gol.horario}
              </li>
            ))}
          </ul>
        )}
      </span>
    );
  }
}
