/*--------------------------------------------------------------------------------------------------*
 *                                          Pop-up util                                             *
 *                                         Genna Olavarri                                           *
 *                                           2025-08-13                                             *
 *--------------------------------------------------------------------------------------------------*/

// Local imports
import './App.css';

/*--------------------------------------------------------------------------------------------------*/
// This is a reusable modal component that can be used to display text and images in a pop-up window.
/*--------------------------------------------------------------------------------------------------*/

const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>&times;</button>
                {title && <h2 className="modal-title">{title}</h2>}
                {children}
            </div>
        </div>
    );
};

export default Modal;

