import React from 'react';
import styles from './CheckBox.module.scss';

import CheckboxItem from './prplItem/CheckBoxItem';
import CheckboxGreen from './greenItem/CheckBoxGreen';
import CheckboxRed from './redItem/CheckBoxRed';

const Checkbox: React.FC = () => {
    return (
        <div className={styles.grid}>
            <div className={`${styles.column} ${styles.style__one}`}>
                <CheckboxItem label="Checkbox prpl 1" />
                <CheckboxItem label="Checkbox prpl 2" />
                <CheckboxItem label="Checkbox prpl 3" />
            </div>

            <div className={`${styles.column} ${styles.style__two}`}>
                <CheckboxGreen label="Checkbox green 1" />
                <CheckboxGreen label="Checkbox green 2" />
                <CheckboxGreen label="Checkbox green 3" />
            </div>

            <div className={`${styles.column} ${styles.style__three}`}>
                <CheckboxRed label="Checkbox red 1" />
                <CheckboxRed label="Checkbox red 2" />
                <CheckboxRed label="Checkbox red 3" />
            </div>
        </div>
    );
};

export default Checkbox;