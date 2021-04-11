import { useContext } from 'react';
import '../styles/modal.css';
import { ModalContext } from '../contexts/ModalContext';

export default function SecondModal(){

    const { closeModal } = useContext(ModalContext)

    return(
        <div className="overlay">
            <div className="modal">
                <h1>Second Modal</h1>
                <button type="button" onClick={closeModal}>Close Modal</button>
            </div>
        </div>
    );
}