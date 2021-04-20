import { useState } from 'react'
import Modal from 'react-modal'

export function ModalDiv( isModalOpen : any) {
    const [ successModalIsOpen, setSuccessModalIsOpen] = useState(false)

    const handleOpenSuccessModal = ()=> {
        setSuccessModalIsOpen(true)
    }

    const handleCloseSuccessModal = ()=> {
        setSuccessModalIsOpen(false)
    }
    setSuccessModalIsOpen(isModalOpen)

    return (
        <Modal isOpen={successModalIsOpen} onRequestClose={handleCloseSuccessModal} className="react-modal-content" overlayClassName="react-modal-overlay">
            <h2>Time cadastrado com sucesso !! 🎉✨🎇🎆</h2>
            <button type="button" onClick={handleCloseSuccessModal} className="react-modal-close"><p>Clique para sair</p></button>
        </Modal>
    )
}
