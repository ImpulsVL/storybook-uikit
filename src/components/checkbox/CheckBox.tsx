import React from 'react';
import styles from './CheckBox.module.scss';

interface CheckboxProps {
    label: string;
    checked: boolean;
    iconType?: 'check' | 'plus' | 'minus';
    onChange: (checked: boolean) => void; // Добавляем обработчик изменения
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, iconType, onChange }) => {
    // Определяем классы для иконок
    const iconClass = iconType ? `icon-${iconType}` : '';
    const checkboxClass = `${styles.checkbox} ${checked ? styles.checked : ''} ${iconClass}`;

    return (
        <label className={styles.label}>
            <input 
                type="checkbox" 
                checked={checked} 
                className={styles.input} 
                onChange={() => onChange(!checked)} // Обновляем состояние при изменении
            />
            <div className={checkboxClass} />
            <span className={styles.labelText}>{label}</span>
        </label>
    );
};

export default Checkbox;