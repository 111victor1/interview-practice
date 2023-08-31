import { useState } from "react"
import Modal from "./Modal"
import "./Modal.css"
const ModalApp = () => {
    const [openModal, setOpenModal] = useState(false);
    return (
        <div className="par">
      
            <h2>This is a modal App</h2>
            <button onClick={() => setOpenModal(true) }>Open Modal</button>
    
            {openModal && <Modal closeModal = {setOpenModal} />}
        </div>
    )
}

export default ModalApp