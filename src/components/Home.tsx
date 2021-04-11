import React, { useContext } from 'react';
import '../styles/home.css';
import { ModalContext } from '../contexts/ModalContext';

export default function Home(){

    const { showModal } = useContext(ModalContext)

    return(
        <div className="container">
            <h1>Sistema de Modais usando Context API</h1>

            <div className="modals">
                <button type='button' onClick={() => showModal('primeira')}>Mostrar Modal 1</button>
                <button type='button' onClick={() => showModal('segunda')}>Mostrar Modal 2</button>
                <button type='button' onClick={() => showModal('terceira')}>Mostrar Modal 3</button>
            </div>
        </div>
    )
}