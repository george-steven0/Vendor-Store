import Backdrop from './backdrop/backdrop';
import classes from './modal.module.css'

const Modal = (props) => {
    return ( 
        <div className={classes.modalContainer + " " + props.className}>
            <Backdrop show={props.show} dismiss = {props.dismissHandler} />
            <div className={classes.modal + " " + props.className }  
                style={{ transform : props.show ? 'translateY(0)' : 'translateY(-200vh)',
                            opacity : props.show ? '1' : '0'}}>
                {props.children}
            </div>
        </div>
    );
}

export default Modal;