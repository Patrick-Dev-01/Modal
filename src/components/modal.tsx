import React, { useContext } from 'react';
import '../styles/modal.css';
import { ModalContext } from '../contexts/ModalContext';

export default function Modal(){

    const { closeModal } = useContext(ModalContext)

    return(
        <div className="overlay">
            <div className="container">
                <h1>Modal</h1>
                <button type="button" onClick={closeModal}>Close Modal</button>
            </div>
        </div>
    );
}