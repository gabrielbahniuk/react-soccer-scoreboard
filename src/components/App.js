import React, {Component} from 'react';

import PlacarContainer from './PlacarContainer';

import Modal from 'react-modal';

import styles from './styles';

Modal.setAppElement('#app');

export default class App extends Component {
    
    constructor(props) {
        super(props);        
        this.state = {
            partida: {
                estadio : 'Maracanã',
                data: '25/07/2018',
                horario: '09:00h'
            },
            time : {
                casa: 'N/A',
                visitante: 'N/A'
            },            
            isModalOpen: true
        };        
        this.handleClickSave = this.handleClickSave.bind(this);
    }
    
    closeModal = () => this.setState({isModalOpen: false});
    
    handleClickSave = () => {
        this.setState({ time : {                        
                            visitante: this.refs.time_visitante.value,
                            casa : this.refs.time_casa.value,
                     }});
        this.closeModal();
    }   
    
    render() {
        return (
            <div>
            <Modal
                isOpen={this.state.isModalOpen}                
                onRequestClose={this.closeModal}                    
                contentLabel="Choose the teams"
                onAfterOpen={this.onAfterOpen}                    
                >
                <div style={styles.headerModal}>
                <h2>Choose the teams</h2>
                <button style={styles.closeButton} onClick={this.closeModal}>Close</button>
                </div>
                <input style={styles.inputText} type="text" ref="time_casa"  placeholder="Informe o time da casa..."/>
                
                <input style={styles.inputText} type="text" ref="time_visitante" placeholder="Informe o time visitante..."/>  
                
                <button style={styles.button} onClick={this.handleClickSave}>Save</button>                         
            </Modal>
            <PlacarContainer {...this.state} />
            </div>
        );
    }
    
}
Modal.defaultStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.75)'
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'absolute',
        top: '150px',
        left: '250px',
        right: '250px',
        bottom: '150px',
        border: '1px solid #ccc',
        background: '#fff',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '4px',
        outline: 'none',
        padding: '20px'
    }
};