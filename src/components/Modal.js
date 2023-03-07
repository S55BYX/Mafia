function Modal(props) {

  return (
    <div className="modal">
      {props.txt.message}
      <div className="button-container">
    <button className='modal-button' style= {{display: props.txt.options === 1 &&'none'}}
          onClick={() => {
            props.togglePopup();
            props.confirmed();
          }}
        >
          Confirm
        </button>
        <button className='modal-button' onClick={props.togglePopup}>{props.txt.options === 1 ? <>okay</>: <>decline</>} </button>
      </div>
    </div>
  );
}

export default Modal;
