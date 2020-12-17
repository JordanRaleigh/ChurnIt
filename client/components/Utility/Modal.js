import React, {useState} from 'react'
import ReactModal from 'react-modal'

export const Modal = ({modalIsOpen, children}) => {
  return <ReactModal isOpen={modalIsOpen}>{children}</ReactModal>
}

// export const Modal = (props) => {
//   return (
//     <div className='modal' style={props.show ? display: block;' : "display: none;"}>

//     </div>
//   )
// }
