import { FC, InputHTMLAttributes } from 'react';
import styles from '../styles/Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  size?: 'small' | 'medium' | 'large';
}

const Input: FC<InputProps> = ({ size = 'medium', ...props }) => {

  return (
      <input
        {...props}
        className={`${styles.input} ${styles[size]}`}
      />
  );
};

export default Input;
