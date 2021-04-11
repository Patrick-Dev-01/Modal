import React, { useContext } from 'react';
import '../styles/home.css';
import { ModalContext } from '../contexts/ModalContext';

export default function Home(){

    const { showModal } = useContext(ModalContext)

    return(
        <div>
            <h1>Sistema de Modal usando Context API</h1>
            <button type='button' onClick={showModal}>Mostrar Modal</button>
        </div>
    )
}