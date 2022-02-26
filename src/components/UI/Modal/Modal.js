import classes from "./Modal.module.css";

import React from 'react'
import ReactDOM from 'react-dom'


const Backdrop = props =>{

    return <div className={classes.backdrop} onClick={props.onClose}></div>
}

const ModalOverlay = props=>{

    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}

const Modal=(props)=>{
const modalPortal = document.getElementById('overlay')
    return (
      <React.Fragment>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, modalPortal)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, modalPortal)}
      </React.Fragment>
    );

}

export default Modal;