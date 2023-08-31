import "./Modal.css"
const Modal = ({closeModal}) => {
    return (
        <div className="modal-background">
            <div className="modal-body">
                <div className="close-button" >
                    <button onClick={() => {closeModal(false)}}>x</button>
                </div>
                <div className="title">
                    <h1>Are You Sure You Want to Continue?</h1>
                </div>
                <div className="body">
                    <p>The next page looks amazing. Hope you want to go there!</p>
                </div>
                <div className="footer">
                    <button
                        onClick={() => {
                        closeModal(false);
                        }}
                        id="cancelBtn"
                    >
                        Cancel
                    </button>
                    <button>Continue</button>
                </div>
            </div>
        </div>
    )
}

export default Modal