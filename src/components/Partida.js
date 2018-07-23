import React from "react";
import styles from "./styles/";
const Partida = ({ estadio, data, horario }) => {
  return (
    <section>
      <div style={styles.sectionPartida}>
        <h3>Placar da Rodada</h3>
        <h5>Estádio: {estadio}</h5>
        <h5>
          Data/Hora: {data} {horario}
        </h5>
      </div>
    </section>
  );
};
export default Partida;
