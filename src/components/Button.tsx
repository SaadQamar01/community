import React, { FC, ButtonHTMLAttributes } from 'react';
import styles from '../styles/Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  startIcon?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'cancel' | 'delete'; 
  size?: 'small' | 'medium' | 'large'; 
}

const Button: FC<ButtonProps> = ({ children, startIcon, size = 'large', ...rest }) => {
  return (
    <button
      {...rest}
      className={`${styles.baseStyles} ${styles[size]} ${rest.className}`}
    >
      {startIcon && <span className={styles.icon}>{startIcon}</span>}
      <div className={styles.textContainer}>
        {children}
      </div>
    </button>
  );
};

export default Button;
