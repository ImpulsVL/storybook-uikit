import React from 'react';
import styles from './Input.module.scss';

interface InputProps {
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    type?: string;
    className?: string;
}

const Input: React.FC<InputProps> = ({ label, value, onChange, placeholder, type = 'text', className }) => {
    return (
        <div className={styles.inputContainer}>
            <label className={styles.label}>{label}</label>
            <input
                className={`${styles.input} ${className}`}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    );
};

export default Input;