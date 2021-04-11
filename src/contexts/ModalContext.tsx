import React, { createContext, useState } from 'react';
import Modal from '../components/modal';

interface ModalContextData{
    showModal: () => void;
    closeModal: () => void;
}

interface ModalProps{
    children: React.ReactNode
}

export const ModalContext = createContext({} as ModalContextData)

export function ModalProvider({ children } : ModalProps){
    const [openModal, setOpenModal] = useState(false);

    function showModal(){
        setOpenModal(true);
    }

    function closeModal(){
        setOpenModal(false);
    }

    return(
        <ModalContext.Provider value={{
            showModal,
            closeModal,
        }}>

            { children }
            { openModal && <Modal /> }
        </ModalContext.Provider>
    )
}

