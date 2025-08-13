import styles from './Modal.module.css';
import {type ReactNode, type KeyboardEvent, useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';


type ModalProps = {
  isOpen: boolean,
  onClose: () => void,
  children: ReactNode
};


const Modal = ({ isOpen, onClose, children }: ModalProps) => {

  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && overlayRef.current) {
      overlayRef.current.focus();
    }
  }, [isOpen]);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {

    if (event.key === 'Escape' || event.key === 'Esc') {
      onClose();
    }
  };

  if (!isOpen) {
    return;
  }

  return ReactDOM.createPortal(
    <div
      ref={overlayRef}
      className={styles.overlay}
      onClick={onClose}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
    >
      <div className={styles.content} onClick={(event) => event.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root')!
  );
};


export default Modal;
