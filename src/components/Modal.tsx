import React, { FC, ReactNode, useEffect } from 'react';
import { useOutsideClick } from '../hooks/useOutsideClick';
import styles from '../styles/Modal.module.scss';

interface ModalProps {
  title?: string;
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Modal: FC<ModalProps> = ({ title, children, isOpen, onClose }) => {
  const ref = useOutsideClick(onClose, isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; 
    } else {
      document.body.style.overflow = ''; 
    }

    return () => {
      document.body.style.overflow = ''; 
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
        ref={ref}
      >
        <div className={styles.header}>
          {title && <h2 className={styles.title}>{title}</h2>}
          <p onClick={onClose} className={styles.closeButton}>
            &times;
          </p>
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
