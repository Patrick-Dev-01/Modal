import React, { createContext, useState } from 'react';
import FirstModal from '../components/FirstModal';
import SecondModal from '../components/SecondModal';
import ThridModal from '../components/ThirdModal';

interface ModalContextData{
    modalId: string;
    showModal: (id: string) => void;
    closeModal: () => void;
}

interface ModalProps{
    children: React.ReactNode;
}

export const ModalContext = createContext({} as ModalContextData)

export function ModalProvider({ children } : ModalProps){
    const [modalId, setModalId] = useState('');
    const [openModal, setOpenModal] = useState(false);

    function showModal(id: string){
        setModalId(id);
        setOpenModal(true);
    }

    function closeModal(){
        setOpenModal(false);
    }

    return(
        <ModalContext.Provider value={{
            modalId,
            showModal,
            closeModal,
        }}>

            { children }
            { openModal && (
                modalId === 'primeira' ? <FirstModal /> : 
                modalId === 'segunda' ? <SecondModal />  : 
                modalId === 'terceira' ? <ThridModal /> : 
                <></>
            )}
        </ModalContext.Provider>
    )
}

