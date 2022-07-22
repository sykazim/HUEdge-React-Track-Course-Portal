import classes from './Modal.module.css'

function Modal(props){

    function cancelHandler(){

        props.onCancel();
    }

    function confirmHandler(){

        props.onConfirm();
    }

    return <div className={classes.modal}>
        <i class ="fa fa-check-circle" style={{ 'color': 'green', 'display':'inline-block'} }></i>
        &nbsp; &nbsp;
        <span>You have successfully placed Your Order</span>
        {/* <button className={classes.btn ,btn--alt} onClick={cancelHandler}>Cancel</button> */}
        <br></br>
        <br></br>
        <button className="btn btn-danger" onClick={confirmHandler}>Ok</button>
    </div>

}

export default Modal;