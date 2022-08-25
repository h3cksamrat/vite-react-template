import { PropsWithChildren } from 'react';
import ReactDOM from 'react-dom';
import '@styles/modal.css';

interface IModalProps {
  isShowing: boolean;
  hide: () => void;
  title: string;
}

function Modal({ isShowing, hide, title, children }: PropsWithChildren<IModalProps>) {
  return isShowing
    ? ReactDOM.createPortal(
        <div className="modal-overlay">
          <div className="modal-wrapper">
            <div className="modal">
              <div className="modal-header">
                <h4>{title}</h4>
                <button type="button" className="modal-close-button" onClick={hide}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">{children}</div>
            </div>
          </div>
        </div>,
        document.body
      )
    : null;
}

export default Modal;
