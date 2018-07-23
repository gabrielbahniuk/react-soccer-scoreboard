import React, { Component } from "react";
import styles from "./styles/";
export default class BotaoResetar extends Component {
  constructor() {
    super();
    this.handleClickReset = this.handleClickReset.bind(this);
  }

  handleClickReset = evt => {
    evt.preventDefault();
    this.props.resetar();
  };

  render() {
    return (
      <button
        className="btn btn-danger btn-lg"
        style={styles.btnReset}
        onClick={this.handleClickReset}
      >
        Resetar Placar
      </button>
    );
  }
}
