"use client";

import React, { useState } from 'react';
import styles from './CheckBoxRed.module.scss';

interface CheckboxProps {
    label: string;
}

const CheckboxRed: React.FC<CheckboxProps> = ({ label }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <label className={styles.label}>
            <input 
                className={styles.check__input} 
                type='checkbox' 
                checked={isChecked} 
                onChange={handleCheckboxChange} 
            />
            <span className={styles.check__box}>
                {isChecked ? (
                    <svg width="28px" height="28px" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.svgIcon}>
                        <path d="M4 12H20M12 4V20" className={styles.svgPath} stroke="rgba(229, 69, 69, 1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                ) : (
                    <svg width="28px" height="28px" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.svgIcon}>
                        <path d="M6 12L18 12" className={styles.svgPath} stroke="rgba(229, 69, 69, 1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                )}
            </span>
            <span className={styles.label__text}>{label}</span>
        </label>
    );
};

export default CheckboxRed;