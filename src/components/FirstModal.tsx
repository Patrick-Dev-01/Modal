import { useContext } from 'react';
import '../styles/modal.css';
import { ModalContext } from '../contexts/ModalContext';

export default function FirstModal(){

    const { closeModal } = useContext(ModalContext)

    return(
        <div className="overlay">
            <div className="modal">
                <h1>First Modal</h1>
                <button type="button" onClick={closeModal}>Close Modal</button>
            </div>
        </div>
    );
}