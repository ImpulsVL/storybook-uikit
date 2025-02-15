import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'danger' | 'warning' | 'success';
}

const Button: React.FC<ButtonProps> = ({ label, variant = 'primary' }) => {
  return (
    <button className={`${styles.button} ${styles[variant]}`}>
      {label}
    </button>
  );
};

export default Button;