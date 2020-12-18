import React ,{useState}from 'react'
import Modal from 'react-modal'
import './ModalView.css'
Modal.setAppElement('#root')
function ModalView() {
const[modalIsOpen,setModalIsOpen]= useState(false)

    return (
        <div className="modal">
            <button onClick={()=> setModalIsOpen(true)}>JOIN THE CLUB!</button>
            <Modal className=" modal_one"isOpen={modalIsOpen} onRequestClose={()=> setModalIsOpen(false)}
        
            >
<img src="https://i.ibb.co/yWmhbzC/confetti-87-729044.png" alt="modal"/>
                <h2>Thank you for Subscribing</h2>
            <p>You have successfully subscribed to our list. Happy reading!</p>
           
                <button onClick={()=> setModalIsOpen(false)}>Okay!</button>
         
            
            </Modal>
        </div>
    )
}

export default ModalView
