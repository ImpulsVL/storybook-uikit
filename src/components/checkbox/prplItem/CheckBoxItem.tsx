import React from 'react';
import styles from './CheckBoxItem.module.scss';

interface CheckboxProps {
    label: string;
}

const CheckboxItem: React.FC<CheckboxProps> = ({ label }) => {
    return (
        <label className={styles.label}>
            <input className={styles.check__input} type='checkbox'/>
            <span className={styles.check__box}></span>
            <span className={styles.label__text}>{label}</span>
        </label>
    );
};

export default CheckboxItem;